Batman.View.store.set('/greetings/index', '<div class=\'row\'>\n  <h3 class=\'page-header\'>Enter a greeting:</h3>\n</div>\n<div class=\'row\'>\n  <form class=\'col-md-12 form-horizontal\' data-formfor-greeting=\'exampleGreeting\'>\n    <div class=\'form-group\'>\n      <label class=\"col-sm-2 control-label\">Message</label>\n      <div class=\'col-sm-8\'>\n        <input class=\'form-control\' type=\'text\' data-bind=\'greeting.message\'></input>\n      </div>\n    </div>\n    <div class=\'form-group\'>\n      <label class=\"col-sm-2 control-label\">Title</label>\n      <div class=\'col-sm-8\'>\n        <input class=\'form-control\' type=\'text\' data-bind=\'greeting.title\'></input>\n      </div>\n    </div>\n    <div class=\'form-group\'>\n      <label class=\"col-sm-2 control-label\">Name</label>\n      <div class=\'col-sm-8\'>\n        <input class=\'form-control\' type=\'text\' data-bind=\'greeting.fullName\'></input>\n      </div>\n    </div>\n  </form>\n</div>\n<div class=\'row\'>\n  <div class=\'col-md-12 well\'>\n    <h4>Your Greeting:</h4>\n    <p class=\'lead\' data-bind=\'exampleGreeting.toString\'></p>\n  </div>\n</div>');