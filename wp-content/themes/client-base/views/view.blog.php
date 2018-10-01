<!-- hero image -->
<?php include PARTIAL. 'hero.php' ?>
<?php include PARTIAL.'intro.php' ?>

<?php if (is_archive()) { ?>
    <section class="page-section">
        <div class="row">
            <h1 class="columns small-12">Blog</h1>
        </div>
    </section>
<?php }//end if is_archive ?>

<!--blog section -->
<section class="" id="blog-section">
    <!-- category list section -->
    <?php include PARTIAL.'category-list.php' ?>
    <!-- blog list section -->
    <?php if ($articles['has_posts']) { ?>
        <div class="row blog-list align-center">
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
