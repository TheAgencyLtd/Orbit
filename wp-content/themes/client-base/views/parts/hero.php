<?php if ($hero){ ?>
    <?php
        $sizes = $hero['image']['sizes'];
        //$mobile = $hero['mobile_image'];
        if( $hero['mobile_image'] ) {
            $mobile = $hero['mobile_image']['url'];
        }else {
            $mobile = $sizes['fp-xsmall'];
        }
    ?>
    <div class="hero-container">
        <picture>
            <source srcset="<?=$sizes['fp-tiny']?>" data-srcset="<?=$sizes['fp-xlarge']?>" media="(min-width:80em)">
            <source srcset="<?=$sizes['fp-tiny']?>" data-srcset="<?=$sizes['fp-large']?>" media="(min-width:60em)">
            <source srcset="<?=$sizes['fp-tiny']?>" data-srcset="<?=$sizes['fp-medium']?>" media="(min-width:40em)">
            <img src="<?=$sizes['fp-tiny']?>" data-src="<?=$mobile?>" class="lazyload hero-image blur-up" alt="<?=wp_trim_words($hero['text'], 10)?>" width="100%">
        </picture>
        <div class="hero-content">
            <div class="hero-text">
                <?php if ( isset($hero['text']) && $hero['text'] != '' ){ ?>
                    <?=$hero['text']?>
                <?php } else { ?>
                    <h1><?=$page->post_title?></h1>
                <?php } ?>
                <?php generateCTA($hero['cta'], 'btn btn-hero top-15') ?>
            </div>
        </div>
    </div>
<?php } ?>
