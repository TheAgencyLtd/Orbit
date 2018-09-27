<!-- hero image -->
<?php include PARTIAL. 'hero.php' ?>

<!-- Intro section -->
<?php if ($intros){ ?>
    <section class="page-section">
        <div class="row align-center expanded">
            <div class="columns small-11 medium-7 bottom-15 text-center">
                <div class="sand-section">
                    <img data-src="<?=getImage($page->ID, 'fp-xsmall')?>" class="lazyload" alt="Orbit" >
                </div>
            </div>
            <div class="columns small-11 medium-5 text-center medium-text-left">
                <?php foreach ($intros as $intro) { ?>
                    <div class="intro">
                        <h5 class="no-text-transform"><?=$intro['title']?></h5>
                        <p><?=$intro['text']?></p>
                        <?php generateCTA($intro['cta']) ?>
                    </div>
                    <br>
                <?php } //end intros as $intro ?>
            </div>
        </div>
    </section>
<?php } ?>
<!-- end intro -->

<!-- Discover more section -->
<?php if (isset($discover['discovers']) && $discover['discovers']) { ?>
    <section class="page-section bg-grey text-center relative">
        <div class="row align-center">
            <div class="columns small-11 bottom-15">
                <h3><?=($discover['section_title']) ? $discover['section_title'] : 'Discover more'?></h3>
            </div>

            <?php foreach ($discover['discovers'] as $item) { ?>
                <article class="discover / columns small-11 medium-4 / top-15">
                    <header>
                        <?php if (isset($item['icon'])){ ?>
                            <?php $sizes = $item['icon']['sizes'] ?>
                            <img class="lazyload" data-src="<?=$sizes['fp-small']?>" alt="<?=$item['title']?>" width="<?=$sizes['fp-small-width']?>">
                        <?php } //end if isset $item['icon']?>
                    </header>

                    <?php if ($item['title']){ ?>
                        <h5 class="no-text-transform top-15"><?=$item['title']?></h5>
                    <?php }//end if isset title ?>

                    <?php if ($item['text']){ ?>
                        <p><?=$item['text']?></p>
                    <?php }//end if isset text ?>
                    <footer class="discover-cta">
                        <?php generateCTA($item['cta']) ?>
                    </footer>

                </article>
            <?php }//end foreach $dicover['discovers'] ?>
        </div>
        <img class="oyster lazyload" data-src="<?=IMG_PATH?>oysters.png" alt="Oysters" width="200">
    </section>
<?php } //end if isset $dicover['discovers'] ?>
