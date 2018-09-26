<?php if ($hero){ ?>
    <?php
        $sizes = $hero['image']['sizes'];
        $mobile = $hero['mobile_image'];
    ?>
    <div class="hero-container">
        <picture>
            <source srcset="<?=$sizes['fp-tiny']?>" data-srcset="<?=$sizes['fp-xlarge']?>" media="(min-width:80em)">
            <source srcset="<?=$sizes['fp-tiny']?>" data-srcset="<?=$sizes['fp-large']?>" media="(min-width:60em)">
            <source srcset="<?=$sizes['fp-tiny']?>" data-srcset="<?=$sizes['fp-medium']?>" media="(min-width:40em)">
            <img src="<?=$sizes['fp-tiny']?>" data-src="<?=$mobile['url']?>" class="lazyload hero-image blur-up" alt="<?=wp_trim_words($hero['text'], 10)?>" width="100%">
        </picture>
        <div class="hero-content">
            <?php if ( isset($hero['text']) ){ ?>
                <p class="hero-text"><?=$hero['text']?></p>
            <?php } ?>
            <?php if ( isset($hero['cta']['url']) ){ ?>
                <a href="<?=$hero['cta']['url']?>" class="btn hero-cta" target="<?=$hero['cta']['target']?>"><?=($hero['cta']['title']) ? $hero['cta']['title']: 'Learn more' ?></a>
            <?php } ?>
        </div>
    </div>
<?php } ?>
