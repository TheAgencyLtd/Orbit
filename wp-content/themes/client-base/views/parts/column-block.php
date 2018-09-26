<?php if ( isset($blocks) && $blocks ){ ?>
    <section class="page-section">
        <div class="row content-column">
            <?php foreach ($blocks as $block){ ?>
                <article class="columns small-11 medium-6 large-5 bottom-15 text-style">
                    <header>
                        <h4><strong><?=$block['title']?></strong></h4>
                        <h4 class="light-text capitalize color-blue"><?=$block['sub_title']?></h4>
                        <hr class="bg-blue">
                    </header>
                    <div class="light-text">
                        <?=$block['content']?>
                    </div>
                </article>
            <?php } ?>
        </div>
    </section>
<?php } ?>
