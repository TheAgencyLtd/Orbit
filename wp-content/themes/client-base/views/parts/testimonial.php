<?php if ($testimonials): ?>
    <section class="page-section bg-grey">
        <?php foreach ($testimonials as $testimonial){ ?>
            <article class="row align-center">
                <div class="columns small-11 medium-8 text-center">
                    <header>
                        <figure class="bottom-15 rotated-frame-container">
                            <span class="rotated-frame"></span>
                            <img class="lazyload rotated blur-up" src="<?=getImage($testimonial->ID, 'fp-tiny')?>" data-src="<?=getImage($testimonial->ID, 'thumbnail')?>" alt="<?=$testimonial->post_title?>" width="150" height="150">
                        </figure>
                        <h4 class="color-blue"><?=$testimonial->post_title?></h4>
                    </header>
                    <div class="light-text">
                        <?=$testimonial->post_content?>
                    </div>
                </div>
            </article>
        <?php } ?>
    </section>
<?php endif; ?>
