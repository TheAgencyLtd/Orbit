
	</main><!-- .main-content -->
	<footer class="main-footer page-section bg-footer" role="contentinfo" id="footer-container">
        <div class="row align-center align-top ">
            <div class="columns small-11 medium-3 large-2 bottom-15">
                <a href="https://mayden.co.uk" target="_blank"><img class="lazyload mayden-logo" data-src="<?=IMG_PATH?>mayden-logo.svg" alt="Mayden Logo"></a>
            </div>
            <div class="column small-11 medium-9 large-8 large-offset-2 bottom-15">
                <?php
                    wp_nav_menu(
                        array(
                            'menu' => 'footer-menu',
                            'menu_class' => 'footer-menu',
                            'container-class' => 'footer-menu-container'
                        )
                    );
                ?>
                <div class="text-right">
                    <small>Copyright &#169; <?=date('Y')?> All rights reserved</small>
                </div>
            </div>
        </div>
        <!-- </div> -->
    </footer>
</section><!-- id="page" class="main-container" -->
<img src="<?=IMG_PATH?>up.svg" alt="Up" class="up" id="js-top">

<?php wp_footer(); ?>
<?php the_field('after_body_scripts', 'options') ?>
</body>
</html>
