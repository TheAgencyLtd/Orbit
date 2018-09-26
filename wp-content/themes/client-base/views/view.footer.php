
	</main><!-- .main-content -->
    <section class="page-section" id="contact">
        <?php the_field('form', 'options') ?>
    </section>
	<footer class="main-footer page-section bg-grey" role="contentinfo" id="footer-container">
        <div class="row align-center">
            <div class="column small-11 medium-7 large-9 bottom-15">
                <h6><strong>SITE</strong></h6>
                <?php
                    wp_nav_menu(
                        array(
                            'menu' => 'footer-menu',
                            'menu_class' => 'footer-menu',
                            'container-class' => 'footer-menu-container'
                        )
                    );
                ?>
                <!-- Site designed and built by <a href="http://agencyuk.com" target="_blank">AgencyUK</a> -->
            </div>
            <div class="column small-11 medium-5 large-3 bottom-15">
                <h6><strong>FOLLOW US</strong></h6>
                <div class="social">
                    <?php $accounts = get_field('social_networks', 'options'); ?>
                    <?php //var_dump($accounts); ?>
                    <?php foreach ($accounts as $acc) { ?>
                        <a href="<?=$acc['link_to_account']?>" target="_blank" class="social-link">
                            <img class="lazyload social-icon"  data-src="<?=$acc['logo']['url']?>" alt="Social networks">
                        </a>
                    <?php } ?>
                </div>
            </div>

            <div class="column small-11 medium-9 bottom-15">
                <p class="light-text"><small><?=get_field('footer_claim','options')?></small></p>
            </div>
            <div class="column small-11 medium-3 large-text-center bottom-15">
                <a href="/">
                    <img src="<?=IMG_PATH?>snc-logo.svg" alt="SIP" class="logo-image">
                </a>
            </div>
            <div class="column small-11 medium-12 footer-links">
                <?php $links = get_field('footer_links', 'options'); //var_dump($links); ?>
                <?php foreach ($links as $link) { ?>
                    <a class="light-text color-blue" href="<?=$link['link']['url']?>" target="<?=$link['link']['target']?>"><small><?=$link['link']['title']?></small></a>
                <?php } ?>
            </div>
        </div>
        <!-- </div> -->
    </footer>
</section><!-- id="page" class="main-container" -->
<img src="<?=IMG_PATH?>up.svg" alt="Up" class="up" id="js-top">

<?php wp_footer(); ?>
<?php the_field('after_body_scripts', 'options') ?>

<?php if( !isset($_COOKIE['cookie_accept']) ){ ?>
    <!-- cookie notice banner -->
    <div class="cookie-banner text-center" id="js-banner">
        <p><?=get_field('cookie_text', 'options')?></p>
        <p>
            <a class="btn btn-blue" id="js-accept" href="#">Accept</a>
            <a class="btn btn-blue" id="js-refuse" href="#">Refuse</a>
            <a class="btn btn-blue" href="/privacy-policy">View Privacy Policy</a>
        </p>
    </div>
<?php } ?>

</body>
</html>
