<div class="ui two column page grid">
  <div class="column">
  </div>
  <div class="column">
    <div>

      <form class="ui segment form inverted" id="form_stepone">
        <div class="two fields">
          <div class="field">
            <label for="email">Email</label>
            <div class="ui left labeled icon input">
              <input id="email" name="email" placeholder="john.doe@gmail.com" type="email" required="required">
              <i class="mail icon "></i>
              <div class="ui corner label">
                <i class="icon asterisk"></i>
              </div>
            </div>
          </div>
          <div class="field">
            <label for="location">Location</label>
            <div class="ui left labeled icon input">
              <input id="location" name="location" placeholder="Bangalore" type="text" required="required">
              <i class="map marker icon"></i>
              <div class="ui corner label">
                <i class="icon asterisk"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="field">
          <label for="sells">Given a chance, which <strong>skills you would share</strong> with the community?</label>
          <div class="ui left labeled icon input">
            <input type="text" name="sells" id="sells" placeholder="cooking, pottery, dance, yoga, physics" required="required">
            <i class="smile icon"></i>
            <div class="ui corner label">
              <i class="icon asterisk"></i>
            </div>
          </div>
        </div>
        <div class="field">
          <label for="wants">If available around you, which <strong>skills you would like to gain</strong>?</label>
          <div class="ui left labeled icon input">
            <input type="text" name="wants" id="wants" placeholder="music theory, guitar, gardening, dogs, design" required="required">
            <i class="smile icon"></i>
            <div class="ui corner label">
              <i class="icon asterisk"></i>
            </div>
          </div>
        </div>
        <div class="field">
          <label for="time">How many avg. hours per week can you dedicate for all of this in general?</label>
          <div class="ui left labeled icon input">
            <input type="text" name="time" id="time" placeholder="14" required="required">
            <i class="time icon"></i>
            <div class="ui corner label">
              <i class="icon asterisk"></i>
            </div>
          </div>
        </div>

        <input type="submit" value="I'm done!" class="ui blue submit button disabled" disabled="disabled">
      </form>
    </div>
  </div>
</div>