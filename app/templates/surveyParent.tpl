<div class="ui two column page grid">
  <div class="column">
  </div>
  <div class="column">
    <div style="">
      <div class="ui fluid two item menu">
        <a class="item active" id="know-share">I want to share knowledge</a>
        <a class="item" id="know-gain">I want to gain knowledge</a>
      </div>

      <form class="ui form">
        <div class="two fields">
          <div class="field">
            <label for="email">Email</label>
            <div class="ui left labeled icon input">
              <input id="email" placeholder="john.doe@gmail.com" type="email" required="required">
              <i class="mail icon "></i>
              <div class="ui corner label">
                <i class="icon asterisk"></i>
              </div>
            </div>
          </div>
          <div class="field">
            <label for="location">Location</label>
            <div class="ui left labeled icon input">
              <input id="location" placeholder="Bangalore" type="text" required="required">
              <i class="map marker icon"></i>
              <div class="ui corner label">
                <i class="icon asterisk"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="field">
          <label for="what">Knowledge on what would you like to share?</label>
          <div class="ui left labeled icon input">
            <input type="text" id="what" placeholder="cooking, pottery, dance, mentoring, startups, physics" required="required">
            <i class="gift icon"></i>
            <div class="ui corner label">
              <i class="icon asterisk"></i>
            </div>
          </div>
        </div>
        <div class="field">
          <label for="time">How many avg. hours per week can you dedicate for all of this in general?</label>
          <div class="ui left labeled icon input">
            <input type="text" id="time" placeholder="6">
            <i class="time icon"></i>
          </div>
        </div>

        <input type="submit" value="I'm done!" class="ui blue submit button disabled">
      </form>
    </div>
  </div>
</div>