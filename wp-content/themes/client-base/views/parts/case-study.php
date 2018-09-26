<?php if ($cases){ ?>
    <?php //var_dump($cases); ?>
    <section class="page-section">
        <?php foreach ($cases as $case): ?>
            <article class="row align-center case text-center large-text-left">
                <div class="columns small-11 large-5 bottom-15">
                    <a href="<?=$case->guid?>" class="">
                        <img class="lazyload blur-up" src="<?=getImage($case->ID, 'fp-tiny')?>" data-src="<?=getImage($case->ID, 'casestudy')?>" alt="<?=$case->post_title?>" width="500">
                    </a>
                </div>
                <div class="columns small-11 medium-8 large-5">
                    <h4 class="color-blue"><a href="<?=$case->guid?>"><?=$case->post_title?></a></h4>
                    <p class="bottom-15 light-text"><?=($case->post_excerpt)? $case->post_excerpt : wp_trim_words($case->post_content, 30)?></p>
                    <p><a href="<?=$case->guid?>" class="btn btn-blue">Read more</a></p>
                </div>
            </article>
        <?php endforeach; ?>
    </section>
<?php } ?>
