
let temaClaro = true


function verificarTema(){
    const temaClaro = JSON.parse(localStorage.getItem('temaClaro'));
  
    if(temaClaro){
  
        document.body.style.backgroundColor='#252b35'
        document.getElementById('header-mobile').style.backgroundColor='#272f3b';
        document.getElementById('divConta-mobile').style.backgroundColor='#272f3b';
        document.getElementById('categorias').style.backgroundColor='#2b3441'

        //css da navbar
        document.getElementById('fundoNavBar-Mobile').style.backgroundColor='rgb(48, 55, 68)';
        document.getElementById('button2navBar-Mobile').style.backgroundColor='white';
        document.getElementById('imgButton2navBar').src='images/homeBlack.png';
        document.getElementById('imgButton1navBar').src='images/mapWhite.png';
        document.getElementById('imgButton3navBar').src='images/menuWhite.png';



        document.getElementById('fundoBotoes').style.backgroundColor='#374150';
        
        document.getElementById('fundoPerfil').style.border='2px solid #29313d';
        document.getElementById('perfil-Button').style.color='rgb(212, 212, 212)';

        document.getElementById('fundoConfiguracoes').style.border='2px solid #29313d';
        document.getElementById('configuracoes-Button').style.color='rgb(212, 212, 212)';

        document.getElementById('fundoTema').style.border='2px solid #29313d';
        document.getElementById('tema-Button').style.color='rgb(212, 212, 212)';
        document.getElementById('tema-Button').innerHTML='Tema: Escuro';

        document.getElementById('fundoSairConta').style.border='2px solid #29313d';
        document.getElementById('exitConta-Button').style.color='rgb(212, 212, 212)';
        document.getElementById('exitConta-Image').src='images/exitWhite.png';



        document.getElementById('titleCategoria').style.color='white'
        document.getElementById('categoria1-button').style.backgroundColor='#2b3441'
        document.getElementById('categoria1-button').style.border='2px solid #333d4a'
        document.getElementById('categoria1-button').style.color='rgb(212, 212, 212)'
        document.getElementById('categoria2-button').style.backgroundColor='#2b3441'
        document.getElementById('categoria2-button').style.border='2px solid #333d4a'
        document.getElementById('categoria2-button').style.color='rgb(212, 212, 212)'

        document.getElementById('bloco1-mapa').style.backgroundColor='#2b3441'
        document.getElementById('titleBloco1').style.color='white'
        document.getElementById('andar1-button').style.backgroundColor='#2b3441'
        document.getElementById('andar1-button').style.border='2px solid #333d4a'
        document.getElementById('andar1-button').style.color='rgb(212, 212, 212)'
        document.getElementById('andar2-button').style.backgroundColor='#2b3441'
        document.getElementById('andar2-button').style.border='2px solid #333d4a'
        document.getElementById('andar2-button').style.color='rgb(212, 212, 212)'

        document.getElementById('bloco2').style.backgroundColor='#2b3441'
        document.getElementById('titleBloco2').style.color='white'
        document.getElementById('salasButton').style.backgroundColor='#2b3441'
        document.getElementById('salasButton').style.border='2px solid #333d4a'
        document.getElementById('salasButton').style.color='rgb(212, 212, 212)'

        document.getElementById('salasButton2').style.backgroundColor='#2b3441'
        document.getElementById('salasButton2').style.border='2px solid #333d4a'
        document.getElementById('salasButton2').style.color='rgb(212, 212, 212)'

        document.getElementById('salasButton3').style.backgroundColor='#2b3441'
        document.getElementById('salasButton3').style.border='2px solid #333d4a'
        document.getElementById('salasButton3').style.color='rgb(212, 212, 212)'

        document.getElementById('salasButton4').style.backgroundColor='#2b3441'
        document.getElementById('salasButton4').style.border='2px solid #333d4a'
        document.getElementById('salasButton4').style.color='rgb(212, 212, 212)'

        document.getElementById('salasButton5').style.backgroundColor='#2b3441'
        document.getElementById('salasButton5').style.border='2px solid #333d4a'
        document.getElementById('salasButton5').style.color='rgb(212, 212, 212)'

        document.getElementById('salasButton6').style.backgroundColor='#2b3441'
        document.getElementById('salasButton6').style.border='2px solid #333d4a'
        document.getElementById('salasButton6').style.color='rgb(212, 212, 212)'

        document.getElementById('salasButton7').style.backgroundColor='#2b3441'
        document.getElementById('salasButton7').style.border='2px solid #333d4a'
        document.getElementById('salasButton7').style.color='rgb(212, 212, 212)'

        document.getElementById('salasButton8').style.backgroundColor='#2b3441'
        document.getElementById('salasButton8').style.border='2px solid #333d4a'
        document.getElementById('salasButton8').style.color='rgb(212, 212, 212)'

        document.getElementById('salasButton9').style.backgroundColor='#2b3441'
        document.getElementById('salasButton9').style.border='2px solid #333d4a'
        document.getElementById('salasButton9').style.color='rgb(212, 212, 212)'


        document.getElementById('bloco3').style.backgroundColor='#2b3441'
        document.getElementById('titleBloco3').style.color='white'
        document.getElementById('salasButton10').style.backgroundColor='#2b3441'
        document.getElementById('salasButton10').style.border='2px solid #333d4a'
        document.getElementById('salasButton10').style.color='rgb(212, 212, 212)'

        document.getElementById('salasButton11').style.backgroundColor='#2b3441'
        document.getElementById('salasButton11').style.border='2px solid #333d4a'
        document.getElementById('salasButton11').style.color='rgb(212, 212, 212)'

        document.getElementById('salasButton12').style.backgroundColor='#2b3441'
        document.getElementById('salasButton12').style.border='2px solid #333d4a'
        document.getElementById('salasButton12').style.color='rgb(212, 212, 212)'

        document.getElementById('salasButton13').style.backgroundColor='#2b3441'
        document.getElementById('salasButton13').style.border='2px solid #333d4a'
        document.getElementById('salasButton13').style.color='rgb(212, 212, 212)'

        document.getElementById('salasButton14').style.backgroundColor='#2b3441'
        document.getElementById('salasButton14').style.border='2px solid #333d4a'
        document.getElementById('salasButton14').style.color='rgb(212, 212, 212)'

        document.getElementById('salasButton15').style.backgroundColor='#2b3441'
        document.getElementById('salasButton15').style.border='2px solid #333d4a'
        document.getElementById('salasButton15').style.color='rgb(212, 212, 212)'

        document.getElementById('salasButton16').style.backgroundColor='#2b3441'
        document.getElementById('salasButton16').style.border='2px solid #333d4a'
        document.getElementById('salasButton16').style.color='rgb(212, 212, 212)'

        document.getElementById('salasButton17').style.backgroundColor='#2b3441'
        document.getElementById('salasButton17').style.border='2px solid #333d4a'
        document.getElementById('salasButton17').style.color='rgb(212, 212, 212)'

        document.getElementById('salasButton18').style.backgroundColor='#2b3441'
        document.getElementById('salasButton18').style.border='2px solid #333d4a'
        document.getElementById('salasButton18').style.color='rgb(212, 212, 212)'


    }else{
        document.body.style.backgroundColor='white'
        document.getElementById('header-mobile').style.backgroundColor='#1c77ff';
        document.getElementById('divConta-mobile').style.backgroundColor='#1c77ff';

        //css da navbar
        document.getElementById('fundoNavBar-Mobile').style.backgroundColor='white';
        document.getElementById('button2navBar-Mobile').style.backgroundColor='#1c77ff';
        document.getElementById('imgButton2navBar').src='images/homeWhite.png';
        document.getElementById('imgButton1navBar').src='images/mapBlack.png';
        document.getElementById('imgButton3navBar').src='images/menuBlack.png';
     
        //css do menu slider
        document.getElementById('fundoBotoes').style.backgroundColor='#ffffff';
        
        document.getElementById('fundoPerfil').style.border='2px solid rgb(241, 241, 241)';
        document.getElementById('perfil-Button').style.color='rgb(36, 36, 36)';

        document.getElementById('fundoConfiguracoes').style.border='2px solid rgb(241, 241, 241)';
        document.getElementById('configuracoes-Button').style.color='rgb(36, 36, 36)';

        document.getElementById('fundoTema').style.border='2px solid rgb(241, 241, 241)';
        document.getElementById('tema-Button').style.color='rgb(36, 36, 36)';
        document.getElementById('tema-Button').innerHTML='Tema: Claro';

        document.getElementById('fundoSairConta').style.border='2px solid rgb(241, 241, 241)';
        document.getElementById('exitConta-Button').style.color='rgb(36, 36, 36)';
        document.getElementById('exitConta-Image').src='images/exitBlack.png';
        
    document.getElementById('categorias').style.backgroundColor='white'
        document.getElementById('titleCategoria').style.color='rgb(36, 36, 36)'
        document.getElementById('categoria1-button').style.backgroundColor='white'
        document.getElementById('categoria1-button').style.border='2px solid rgb(241, 241, 241)'
        document.getElementById('categoria1-button').style.color='rgb(80, 80, 80)'
        document.getElementById('categoria2-button').style.backgroundColor='white'
        document.getElementById('categoria2-button').style.border='2px solid rgb(241, 241, 241)'
        document.getElementById('categoria2-button').style.color='rgb(80, 80, 80)'


        document.getElementById('bloco1-mapa').style.backgroundColor='white'
        document.getElementById('titleBloco1').style.color='rgb(36, 36, 36)'
        document.getElementById('andar1-button').style.backgroundColor='white'
        document.getElementById('andar1-button').style.border='2px solid rgb(241, 241, 241)'
        document.getElementById('andar1-button').style.color='rgb(80, 80, 80)'
        document.getElementById('andar2-button').style.backgroundColor='white'
        document.getElementById('andar2-button').style.border='2px solid rgb(241, 241, 241)'
        document.getElementById('andar2-button').style.color='rgb(80, 80, 80)'

        document.getElementById('bloco2').style.backgroundColor='white'
        document.getElementById('titleBloco2').style.color='rgb(36, 36, 36)'

        document.getElementById('salasButton').style.backgroundColor='white'
        document.getElementById('salasButton').style.border='2px solid rgb(241, 241, 241)'
        document.getElementById('salasButton').style.color='rgb(80, 80, 80)'

        document.getElementById('salasButton2').style.backgroundColor='white'
        document.getElementById('salasButton2').style.border='2px solid rgb(241, 241, 241)'
        document.getElementById('salasButton2').style.color='rgb(80, 80, 80)'

        document.getElementById('salasButton3').style.backgroundColor='white'
        document.getElementById('salasButton3').style.border='2px solid rgb(241, 241, 241)'
        document.getElementById('salasButton3').style.color='rgb(80, 80, 80)'

        document.getElementById('salasButton4').style.backgroundColor='white'
        document.getElementById('salasButton4').style.border='2px solid rgb(241, 241, 241)'
        document.getElementById('salasButton4').style.color='rgb(80, 80, 80)'

        document.getElementById('salasButton5').style.backgroundColor='white'
        document.getElementById('salasButton5').style.border='2px solid rgb(241, 241, 241)'
        document.getElementById('salasButton5').style.color='rgb(80, 80, 80)'

        document.getElementById('salasButton6').style.backgroundColor='white'
        document.getElementById('salasButton6').style.border='2px solid rgb(241, 241, 241)'
        document.getElementById('salasButton6').style.color='rgb(80, 80, 80)'

        document.getElementById('salasButton7').style.backgroundColor='white'
        document.getElementById('salasButton7').style.border='2px solid rgb(241, 241, 241)'
        document.getElementById('salasButton7').style.color='rgb(80, 80, 80)'

        document.getElementById('salasButton8').style.backgroundColor='white'
        document.getElementById('salasButton8').style.border='2px solid rgb(241, 241, 241)'
        document.getElementById('salasButton8').style.color='rgb(80, 80, 80)'

        document.getElementById('salasButton9').style.backgroundColor='white'
        document.getElementById('salasButton9').style.border='2px solid rgb(241, 241, 241)'
        document.getElementById('salasButton9').style.color='rgb(80, 80, 80)'


        document.getElementById('bloco3').style.backgroundColor='white'
        document.getElementById('titleBloco3').style.color='rgb(36, 36, 36)'

        document.getElementById('salasButton10').style.backgroundColor='white'
        document.getElementById('salasButton10').style.border='2px solid rgb(241, 241, 241)'
        document.getElementById('salasButton10').style.color='rgb(80, 80, 80)'

        document.getElementById('salasButton11').style.backgroundColor='white'
        document.getElementById('salasButton11').style.border='2px solid rgb(241, 241, 241)'
        document.getElementById('salasButton11').style.color='rgb(80, 80, 80)'

        document.getElementById('salasButton12').style.backgroundColor='white'
        document.getElementById('salasButton12').style.border='2px solid rgb(241, 241, 241)'
        document.getElementById('salasButton12').style.color='rgb(80, 80, 80)'

        document.getElementById('salasButton13').style.backgroundColor='white'
        document.getElementById('salasButton13').style.border='2px solid rgb(241, 241, 241)'
        document.getElementById('salasButton13').style.color='rgb(80, 80, 80)'

        document.getElementById('salasButton14').style.backgroundColor='white'
        document.getElementById('salasButton14').style.border='2px solid rgb(241, 241, 241)'
        document.getElementById('salasButton14').style.color='rgb(80, 80, 80)'

        document.getElementById('salasButton15').style.backgroundColor='white'
        document.getElementById('salasButton15').style.border='2px solid rgb(241, 241, 241)'
        document.getElementById('salasButton15').style.color='rgb(80, 80, 80)'

        document.getElementById('salasButton16').style.backgroundColor='white'
        document.getElementById('salasButton16').style.border='2px solid rgb(241, 241, 241)'
        document.getElementById('salasButton16').style.color='rgb(80, 80, 80)'

        document.getElementById('salasButton17').style.backgroundColor='white'
        document.getElementById('salasButton17').style.border='2px solid rgb(241, 241, 241)'
        document.getElementById('salasButton17').style.color='rgb(80, 80, 80)'

        document.getElementById('salasButton18').style.backgroundColor='white'
        document.getElementById('salasButton18').style.border='2px solid rgb(241, 241, 241)'
        document.getElementById('salasButton18').style.color='rgb(80, 80, 80)'
    }
  }


  function alternarTemaaMobile(){

    temaClaro = !temaClaro;
    localStorage.setItem('temaClaro', JSON.stringify(temaClaro));
}





setInterval(verificarTema, 10);
