<section class="page-section" id="contact">
    <?php the_field('form', 'options') ?>
    <div class="row align-center">
        <div class="columns small-11 medium-10 large-9">
            <h4 class="color-blue"><strong>Contact us</strong></h4>
        </div>
        <div class="columns small-11 medium-10 large-9">
            <form class="form row" action="" method="POST">
                <div class="small-12 medium-6 columns">
                    <label>First name *
                        <input type="text" name="fName" placeholder="You first name" required>
                    </label>
                </div>
                <div class="small-12 medium-6 columns">
                    <label>Last name *
                        <input type="text" name="lName" placeholder="Your last name" required>
                    </label>
                </div>
                <div class="small-12 medium-6 columns">
                    <label>Job title *
                        <input type="text" name="jobTitle" placeholder="Your job title" required>
                    </label>
                </div>
                <div class="small-12 medium-6 columns">
                    <label>Company *
                        <input type="text" name="company" placeholder="Your company" required>
                    </label>
                </div>
                <div class="small-12 medium-6 columns">
                    <label>Email *
                        <input type="email" name="email" placeholder="your_email@example.com" required>
                    </label>
                </div>
                <div class="small-12 medium-6 columns">
                    <label>Telephone
                        <input type="text" name="phone" placeholder="+440012345678">
                    </label>
                </div>
                <div class="small-12 columns">
                    <label>Enquiry</label>
                    <textarea rows="8" name="enquiry" placeholder="Leave us a message"></textarea>
                </div>
                <div class="small-12 columns">
                    <input type="submit" value="Send enquiry" class="btn btn-blue btn-big">
                </div>
            </form>
        </div>
    </div>
</section>
