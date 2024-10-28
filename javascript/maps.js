const contaLogada = localStorage.getItem('contaLogada');
  if (contaLogada === '1') {
    const nomeUsuarioHeader = localStorage.getItem('nomeUsuario'); 
    const fotoUsuarioHeader = localStorage.getItem('fotoUsuario'); 
    document.getElementById('nomeUsuario-Header').innerText = nomeUsuarioHeader; 
    document.getElementById('fotoUsuario-Header').src = fotoUsuarioHeader;
    document.getElementById('nomeUsuario2-Header').innerText = nomeUsuarioHeader; 
    document.getElementById('fotoUsuario2-Header').src = fotoUsuarioHeader; 
  } else {
    document.getElementById('nomeUsuario-Header').innerText = ' ';
    document.getElementById('fotoUsuario-Header').src = 'images/profile-user.png';
    document.getElementById('nomeUsuario2-Header').innerText = ' ';
    document.getElementById('fotoUsuario2-Header').src = 'images/profile-user.png'; 
}

let menuAberto = true;

function menu() {
    if (menuAberto) {

      document.getElementById('containerMenu').style.marginTop='10px';
      document.getElementById('headerLine1').style.marginTop='5px';
      document.getElementById('fotoUsuario-Header').style.marginTop='0px';
      document.getElementById('containerMenu').style.opacity='100%';
        
    } else {
      document.getElementById('containerMenu').style.marginTop='-200px';
      document.getElementById('containerMenu').style.opacity='0%';
    }
    menuAberto = !menuAberto;
}

function menu2() {
  if (menuAberto) {
    console.log('abriu menu')

    document.getElementById('containerMenu-pc').style.marginTop='10px';
    document.getElementById('containerMenu-pc').style.opacity='100%';
      
  } else {
    document.getElementById('containerMenu-pc').style.marginTop='-200px';
    document.getElementById('containerMenu-pc').style.opacity='0%';
  }
  menuAberto = !menuAberto;
}

function sairConta() {

  let contaLogada = localStorage.getItem('contaLogada');


  if (contaLogada === "1") {
    contaLogada = "0";
    localStorage.setItem('contaLogada', contaLogada);
    console.log('saiu')
    window.location.href='index.html';
  } else {
    contaLogada = "1";
    localStorage.setItem('contaLogada', contaLogada);
  }

  console.log(contaLogada);
}


function settings(){
    document.getElementById('mobile').style.display='none';
    document.getElementById('erroPage').style.display='block';

}

function backHome(){
  document.getElementById('mobile').style.display='block';
  document.getElementById('erroPage').style.display='none';

}

function settings2(){
  document.getElementById('computer').style.display='none';
  document.getElementById('erroPage').style.display='block';

}

function backHome2(){
document.getElementById('computer').style.display='block';
document.getElementById('erroPage').style.display='none';

}

function abrirSalas(){
    document.getElementById('blocosCategorias').style.display='none'; // Fecha as categorias
    document.getElementById('bloco1-mapa').style.display='flex';
    
}

function piso1(){
    document.getElementById('bloco2').style.display='flex';
    document.getElementById('bloco3').style.display='none';
    document.getElementById('andar2-button').style.opacity='30%';
    document.getElementById('andar1-button').style.opacity='100%';
}

function piso2(){
    document.getElementById('bloco3').style.display='flex';
    document.getElementById('bloco2').style.display='none';
    document.getElementById('andar1-button').style.opacity='30%';
    document.getElementById('andar2-button').style.opacity='100%';
}