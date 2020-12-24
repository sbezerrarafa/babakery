
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/style.css">
  <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/reset.css">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;700&display=swap" rel="stylesheet">

  <title><?php bloginfo('name');?></title>
  <script>
       function mostra(){
      if(document.getElementById('mais').style.display=='flex '){
      document.getElementById('mais').style.display = 'none';
      }else{document.getElementById('mais').style.display = 'flex'}
    }

    function mostramodal(){

      if(document.getElementById('mostrando').style.display=='none'){
      document.getElementById('mostrando').style.display = 'flex'; 
      }else{document.getElementById('mostrando' ).style.display = 'none'}
      
    }
    function fechamodal(){
      if(document.getElementById('mostrando').style.display=='flex'){
      document.getElementById('mostrando').style.display = 'none'; 
      }else{document.getElementById('mostrando').style.display = 'flex'}
    }
    function img1(){
    document.getElementById("trocarimg").src="<?php echo get_stylesheet_directory_uri(); ?>/src/images/img1.png"
  }
  function img2(){
    document.getElementById("trocarimg").src="<?php echo get_stylesheet_directory_uri(); ?>/src/images/img2.png"
  }
  function img3(){
    document.getElementById("trocarimg").src="<?php echo get_stylesheet_directory_uri(); ?>/src/images/img3.png"
  }

  </script>



<?php wp_head();?>
</head>

<body style="background-color: #EFEFEF;">

  <header class="header">
    <div>
      <nav class="lista-menu">
        <div id="topo">
          <ul class="textos-menu">
            <li><a href="#historia">QUEM SOMOS</a></li>
            <li><a href="#">EQUIPE</a></li>
            <li><a href="#areacontato">CONTATO</a></li>
          </ul>
        </div>

        <div class="logo">
          <a href="index.html">
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/src/images/logo.png" alt="">
          </a>
        </div>
        <div>
          <ul class="textos-menu">
            <li> <a href="http://facebook.com"><img src="<?php echo get_stylesheet_directory_uri(); ?>/src/icons/face.svg" alt=""></a></li>
            <li> <a href="http://instagram.com"><img src="<?php echo get_stylesheet_directory_uri(); ?>/src/icons/instagram-logo.svg" alt=""></a></li>
            <li> <a href="http://twitter.com"><img src="<?php echo get_stylesheet_directory_uri(); ?>/src/icons/twitter.svg" alt=""></a></li>
            <li style="padding-left: 18px;"> <a href="facebook.com"><img src="<?php echo get_stylesheet_directory_uri(); ?>/src/icons/carrinho.svg" alt=""><img src=""
                  alt=""></a></li>
          </ul>
        </div>
      </nav>
      
    </div>


  </header>