<?php include PARTIAL. 'hero.php' ?>
<?php if ($intro){ ?>
    <section class="page-section bg-grey ">
        <div class="row align-center">
            <div class="columns small-11 medium-9 large-8 text-center">
                <?php if ($intro['title']){ ?>
                    <h3 class="intro-title color-blue"><?=$intro['title']?></h3>
                    <hr class="small-5 medium-4 bg-blue">
                <?php } ?>
                <?php if ($intro['content']){ ?>
                    <div class="intro-content">
                        <?=$intro['content']?>
                    </div>
                <?php } ?>
                <?php if (isset($intro['cta']['url']) && !empty($intro['cta']['url'])) { ?>
                    <a href="<?=$intro['cta']['url']?>" class="btn btn-blue" target="<?=$intro['cta']['target']?>"><?=($intro['cta']['title']) ? $intro['cta']['title']: 'Learn more' ?></a>
                <?php } ?>
            </div>
        </div>
    </section>
<?php } ?>


<!-- video placeholder -->
<?php if ($intro['image']){ ?>
    <section class="page-section">
        <div class="row align-center">
            <div class="columns small-11 medium-9 large-8 text-center">
                <img src="<?=$intro['image']['sizes']['fp-medium']?>" alt="placeholder">
            </div>
        </div>
    </section>
<?php } ?>
<!-- end video placeholder -->
<!-- video -->
<?php if ($intro['animation']){ ?>
    <section class="page-section">
        <div class="row align-center">
            <div class="columns small-11 medium-9 large-8 text-center">
                <div class="responsive-embed">
                    <?=addParaToIframe($intro['animation'])?>
                </div>
            </div>
        </div>
    </section>
<?php } ?>
<!-- end video -->
<?php if ($approach || $options){ ?>
    <section class="page-section approach-section" id="js-approach">
        <?php if ($approach){ ?>
            <div class="row align-center ">
                <div class="columns small-11 large-4 text-center">
                    <img class="lazyload blur-up" src="<?=$approach['graphic']['sizes']['fp-tiny']?>" data-src="<?=$approach['graphic']['url']?>" alt="<?=$approach['title']?>" width="283">
                </div>
                <div class="columns small-11 medium-6 large-4 text-center large-text-left intro-content">
                    <h4 class="color-blue"><?=$approach['title']?></h4>
                    <p><?=$approach['text']?></p>
                </div>
            </div>
        <?php }//end if $approach ?>
        <?php if ($options){ ?>
            <div class="row align-center option-section" id="js-option">
                <?php foreach ($options as $key => $opt){ ?>
                    <?php $order = $key + 1 ?>
                    <article class="option text-center columns small-11 medium-6 large-3 option-<?=$order?> bottom-15">
                        <div class="bg-white option-content">
                            <header class="option-header">
                                <span class="rotated-square fadedIn"></span>
                                <span class="option-order"><?=$order?></span>
                                <h5 class="option-title"><strong><?=$opt['title']?></strong></h5>
                            </header>
                            <div class="option-text">
                                <?=$opt['text']?>
                            </div>
                        </div>
                    </article>
                <?php } ?>
            </div>
        <?php }//end if $options ?>
    </section>
<?php }//end if $approach or $options ?>
<div class="bg-grey">
    <?php include PARTIAL.'column-block.php' ?>
</div>
<?php include PARTIAL.'case-study.php' ?>
<?php include PARTIAL.'testimonial.php' ?>
