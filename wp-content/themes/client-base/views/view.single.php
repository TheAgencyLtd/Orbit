<section class="page-section">
    <div class="row align-center">
        <div class="columns small-11 medium-9">
            <article class="single-post bottom-15">
                <header class="post-header">
                    <?php if ( has_post_thumbnail($post) ){ ?>
                        <picture>
                            <source srcset="<?=getImage($post->ID, 'fp-tiny')?>" data-srcset="<?=getImage($post->ID, 'fp-medium')?>" media="(min-width:50em)">
                            <source srcset="<?=getImage($post->ID, 'fp-tiny')?>" data-srcset="<?=getImage($post->ID, 'fp-small')?>" media="(min-width:40em)">
                            <img class="lazyload blur-up" src="<?=getImage($post->ID, 'fp-tiny')?>" data-src="<?=getImage($post->ID, 'fp-xsmall')?>" width="100%" alt="<?=$post->post_title?>">
                        </picture>
                    <?php } ?>
                    <h1 class="post-title"><?=$post->post_title?></h1>
                    <!-- category list section -->
                    <?php include PARTIAL.'category-list.php' ?>
                </header>
                <div class="text-style">
                    <?=$post->post_content?>
                </div>
            </article>
        </div>
    </div>
</section>
<?php if ($related['has_posts']){ ?>
    <section class="">
        <div class="row align-center">
            <!-- related post -->
            <div class="columns small-11 medium-9 bottom-15">
                <h3 class="color-blue"><strong>Others</strong></h3>
                <div class="row related">
                    <?php foreach ($related['results'] as $post){ ?>
                        <article class="columns small-12 medium-6 large-4 related-post">
                            <header class="bottom-15">
                                <a href="<?=$post->link?>">
                                    <img class="lazyload blur-up" data-src="<?=getImage($post->ID, 'fp-blog')?>" src="<?=getImage($post->ID, 'fp-tiny')?>" alt="<?=$post->post_title?>" width="100%">
                                </a>
                            </header>
                            <h6 class="color-blue"><a href="<?=$post->link?>"><?=$post->post_title?></a></h6>
                        </article>
                    <?php } //end foreach ?>
                </div>
            </div>
        </div>
    </section>
<?php } //end if related post?>
