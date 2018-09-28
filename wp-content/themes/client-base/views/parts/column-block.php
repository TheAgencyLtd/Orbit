<?php if ( isset($blocks) && $blocks ){ ?>
    <?php
        /*
            if user tick the box in the CMS saying whether the images should be rounded.
            So we use the above $is_rounded to decide whether the template is
            for the About us page or Features page
            On the About us page, the iamges are rounded so it should be enough to tell
            we are on About us, otherwise on Features page
        */
        $template = (!$is_rounded) ? "" : "";
        if( isset($is_rounded) && $is_rounded ) {
            $rounded = 'rounded';
            $template = 'about';
        }else {
            $rounded = '';
            $template = 'features';
        }
    ?>
    <?php foreach ($blocks as $key => $block){ ?>
        <?php
            $type = ($key%2 == 0) ? '' : 'reversed-section';
            $bg   = ($key%2 != 0) ? 'even-order' : 'bg-grey';
        ?>
        <section class="page-section content-block <?=$bg?> section-<?=$key?> <?=$template?>">
            <article class="block">
                <header class="columns bottom-15 text-center">
                    <h3><?=$block['title']?></strong></h3>
                    <br>
                </header>
                <div class="row align-center <?=$type?>">
                    <div class="columns small-11 large-6 bottom-15 text-center">
                        <img class="lazyload blur-up <?=$rounded?>" src="<?=IMG_PATH?>fallback.jpg" data-src="<?=$block['image']['sizes']['fp-xsmall']?>" alt="<?=$block['title']?>">
                        <br>
                    </div>
                    <div class="columns small-11 large-6 bottom-15">
                        <h5><?=$block['sub_title']?></h5>
                        <div class="text-style bottom-15">
                            <?=$block['text']?>
                        </div>
                        <?php if ($block['cta']) { ?>
                            <br>
                            <?=generateCTA($block['cta'])?>
                        <?php } ?>
                    </div>
                </div>
            </article>
        </section>
    <?php } ?>
<?php } ?>
