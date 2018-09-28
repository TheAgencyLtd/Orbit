<!-- hero image -->
<?php include PARTIAL. 'hero.php' ?>
<?php include PARTIAL.'intro.php' ?>

<!--blog section -->
<section class="page-section" id="blog-section">
    <?php if ($articles['has_posts']) { ?>
        <div class="row blog-list">
            <?php foreach ($articles['results'] as $article){ ?>
                <article class="blog columns small-11 medium-6 large-4 bottom-15 text-center">
                    <header class="blog-header bottom-15">
                        <a href="<?=$article->link?>">
                            <img class="lazyload" data-src="<?=getImage($article->ID, 'fp-blog')?>" alt="<?=$article->post_title?>" width="370">
                        </a>
                    </header>
                    <h6 class="bottom-15">
                        <a href="<?=$article->link?>">
                            <?=$article->post_title?>
                        </a>
                    </h6>
                </article>
            <?php }//foreach $articles ?>
        </div>
        <?php if ($pagination){ ?>
            <div class="text-center">
                <?=$pagination?>
            </div>
        <?php } ?>

    <?php } ?>
</section>
