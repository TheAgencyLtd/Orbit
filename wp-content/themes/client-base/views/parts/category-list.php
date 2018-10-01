<?php if ($categories){ ?>
    <div class="row">
        <div class="column small-11">
            <ul class="category-list styled-list">
                <li class="category">
                    <a class="category-link" href="/blog">All</a>
                </li>
                <?php foreach ($categories as $category){ ?>
                    <?php
                        if ( in_array($category->slug, $cat) ) {
                            $active = 'active';
                        }else {
                            $active = '';
                        }
                    ?>
                    <li class="category">
                        <a class="category-link <?=$active?>" href="<?=get_category_link($category->term_id)?>"><?=$category->name?></a>
                    </li>
                <?php } ?>
            </ul>
        </div>
    </div>
<?php }//end if $categories ?>
