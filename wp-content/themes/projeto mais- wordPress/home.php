<?php
// Template Name home
?>

<?php get_header(); ?>

  <div class="dif-menu"></div>
  <div class="image-capa">
    <div class="itens-capa">
      <h2>Sabor em Cada Pedaço.</h2>
      <button class="btn btn-capa">Nossos Produtos</button>
    </div>
  </div>

  <div class="sublinhado">
    <div id="historia" class="texto-hist">
      <div>
        <img src="<?php echo get_stylesheet_directory_uri(); ?>/src/images/historia.png" align="left">
      </div>
      <div class="text-alig">
        <h2 style='color: #646464;'><?php the_field('titulo_historia');?></h2>
        <p style="color:#646464;font-size: 14px; ">
         <?php the_field('texto_da_historia');?>
        </p>
      </div>
    </div>
  
    <div class="produtos container">
    <div class="sumblinhado">
        <h2>Produtos </h2>
      </div>

     <!-- MODAL-->
     <div class="posicao-modal">
      <div id="mostrando" class="modal">
        <button onclick="fechamodal()" class="btnfechar">x</button>
        <div class="img-princ">
          <img id="trocarimg"  src="<?php echo get_stylesheet_directory_uri(); ?>/src/images/produto 3.png" alt="">
          <div class=img-roda>
          <img style="margin-right: 20px;" onclick="img1();"  src="<?php echo get_stylesheet_directory_uri(); ?>/src/images/img1.png" alt="">
          <img style="margin-right: 20px;" onclick="img2();"  src="<?php echo get_stylesheet_directory_uri(); ?>/src/images/img2.png" alt="">
          <img  onclick="img3();" src="<?php echo get_stylesheet_directory_uri(); ?>/src/images/img3.png" alt="">
        </div>
        </div>
        <div class="tex-modal">
        <div class="title-modal">
          <h3>Tortilette de Laranja Lima com<br> Amoras</h3>
        </div>
          <div class="sub-modal">
            <p>R$12,00</p>
          </div>
          <div class="texto-modal">
            <p>Lorem ipsum dolor sit amet, consectetur adip elit, sed do tempor incididun ut labore et dolore magna aliqua. Ut enim ad mi , quis nostrud veniam exercitation.</p>
          </div>
          <div>
            <span>+ <button>01</button> -</span>
            <button class="btn-carrinho"> Adicionar ao carrinho</button>
          </div>
        </div>
        
        </div>
      </div>
<!--fim modal-->

<div onclick="mostramodal()" class="cards">
        <div class="card ">
          <img class="card-img-top" src="<?php echo get_stylesheet_directory_uri(); ?>/src/images/produto 2.png" width="306px" height="306px" alt="docinho">
          <div class="card-body">
            <h5 class="card-title">Macaron Diversos 90g</h5>
            <p class="card-text especial">R$ 12,00</p>

          </div>
        </div>
        <div class="card mod">
          <img class="card-img-top" src="<?php echo get_stylesheet_directory_uri(); ?>/src/images/produto 3.png" width="306px" height="306px" alt="docinho">
          <div class="card-body">
            <h5 class="card-title">Tortilette de Laranja Lima com Amoras</h5>
            <p class="card-text">R$ 12,00</p>

          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src="<?php echo get_stylesheet_directory_uri(); ?>/src/images/produto 1.png" width="306px" height="306px" alt="docinho">
          <div class="card-body">
            <h5 class="card-title">Fatia de Torta Gelada de Café com Chocolate Amargo</h5>
            <p class="card-text">R$ 11,00</p>
          </div>
        </div>
      
      </div>
       <div id="mais" class="addcards">
      <div class="card  ">
        <img class="card-img-top" src="<?php echo get_stylesheet_directory_uri(); ?>/src/images/produto 5.png" width="306px" height="306px" alt="docinho">
        <div class="card-body">
          <h5 class="card-title">Cupcake de Morango Glaceado</h5>
          <p class="card-text">R$ 11,00</p>

        </div>
      </div>
      <div class="card">
        <img class="card-img-top"src="<?php echo get_stylesheet_directory_uri(); ?>/src/images/produto 4.png" width="306px" height="306px" alt="docinho">
        <div class="card-body">
          <h5 class="card-title">Cupcake de Morango Glaceado</h5>
          <p class="card-text">R$ 6,00</p>

        </div>
      </div>
      <div class="card ">
        <img class="card-img-top" src="<?php echo get_stylesheet_directory_uri(); ?>/src/images/produto 6.png" width="306px" height="306px" alt="docinho">
        <div class="card-body">
          <h5 class="card-title">Fatia de Torta Gelada de Frutas Vermelhas</h5>
          <p class="card-text">R$ 14,00</p>

        </div>
      </div>
    </div>
      
    </div>

      <div class="btn-prod">
      <button class="btn btn-produtos" onclick="mostra()"> ver mais</button>
      </div>
</div>
  </div>
 </div>
  <section>
<div id="areacontato" class=" titulo-contato">
          <p>Se interessou pelos nossos serviços? Manda uma
            mensagem pra gente. :)</p>
      </div>

      <div class=" contato">
  <form class="form-contato">
          <div class="item">
            <label for="nome">NOME</label>
            <input type="text" id="nome" placeholder="Ex.: Renata Lopes">
          </div>
          <div class="item">
            <label for="telefone">TELEFONE</label>
            <input type="text" id="email" placeholder="(xx) x xxxx.xxxx">
          </div>
          <div class="item">
            <label for="email">EMAIL</label>
            <input type="text" id="mensagem" placeholder="exemplo@exemplo.com.br">
          </div>
          <div class="item">
            <label for="espec">MENSAGEM</label>
            <textarea id="espec" placeholder="Digite aqui a sua mensagem"></textarea>
          </div>

          <div><button class="btn-form">Enviar</button></div>
        </form>
        <div class="card-local">
          <div class="titulo-card-local">
            <p>Você também pode<br> nos fazer uma visita.</p>
          </div>
          <div class="img-local"><img src="<?php echo get_stylesheet_directory_uri(); ?>/src/images/localizacao.png" alt="">
            <div class="sub-title-local">
              <div class="icon-loc">
                <img src="<?php echo get_stylesheet_directory_uri(); ?>/src/icons/localizacao-branca.png" alt="">
              </div>
              <div class="subt-card-local">
                <p>R. Hermílio Arantes, 1040 - Vila dos Coqueiros. Graças, Recife - PE.</p>
              </div>
            </div>
            <button class="btn-loc"> traçar Rota</button>
          </div>



        </div>
      </div>
      </section>

 <?php get_footer(); ?>