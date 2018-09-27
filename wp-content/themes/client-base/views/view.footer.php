
	</main><!-- .main-content -->
	<footer class="main-footer page-section bg-footer" role="contentinfo" id="footer-container">
        <div class="row align-center align-top ">
            <div class="columns small-11 medium-3 large-2 bottom-15">
                <img class="lazyload mayden-logo" data-src="<?=IMG_PATH?>mayden-logo.svg" alt="Mayden Logo">
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
            <?php $accounts = get_field('social_networks', 'options'); ?>
            <?php if ($accounts): ?>
                <div class="column small-11 medium-5 large-3 bottom-15">
                <div class="social">
                        <?php foreach ($accounts as $acc) { ?>
                            <a href="<?=$acc['link_to_account']?>" target="_blank" class="social-link">
                                <img class="lazyload social-icon"  data-src="<?=$acc['logo']['url']?>" alt="Social networks">
                            </a>
                        <?php } ?>
                    </div>
                </div>
            <?php endif; ?>
        </div>
        <!-- </div> -->
    </footer>
</section><!-- id="page" class="main-container" -->
<img src="<?=IMG_PATH?>up.svg" alt="Up" class="up" id="js-top">

<?php wp_footer(); ?>
<?php the_field('after_body_scripts', 'options') ?>
</body>
</html>
