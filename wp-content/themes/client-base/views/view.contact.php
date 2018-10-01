<?php include PARTIAL. 'hero.php' ?>
<?php include PARTIAL.'intro.php' ?>
<section class="page-section bg-grey">
    <div class="row align-center">
        <div class="columns small-11 large-6 bottom-15">
            <?php if ($address){ ?>
                <address class="bottom-15">
                    <?=$address?>
                </address>
            <?php } ?>
            <?php if ($map){ ?>
                <div class="map responsive-embed">
                    <?=addParaToIframe($map)?>
                </div>
            <?php } ?>
        </div>
        <div class="columns small-11 large-6">
            <?=$form?>
        </div>
    </div>
</section>
