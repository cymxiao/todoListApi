'use strict';
module.exports = function(app) {
  var leisurePark = require('../controllers/leisureParkController');
 
  app.route('/leisurePark')
    .get(leisurePark.list_all_leisureParks)
    .post(leisurePark.create_a_leisurePark);


  app.route('/leisurePark/:leisureParkId')
    .get(leisurePark.read_a_leisurePark)
    .post(leisurePark.update_a_leisurePark)
    .delete(leisurePark.delete_a_leisurePark);

  app.route('/getleisurePark/:ownerId')
    .get(leisurePark.list_leisureParks_for_Owner);
  
  app.route('/getleisureParkforApplier/:applierId')
    .get(leisurePark.list_leisureParks_for_Applier);
  
  app.route('/getleisureParkbyCom/:comId/:ownerId')
    .get(leisurePark.list_leisureParks_by_Community);

  app.route('/groupleisurePark')
    .get(leisurePark.groupCountbyCommunity);

  app.route('/checkStartTime/:comId/:ownerId/:cpId/:startTime')
    .get(leisurePark.checkStartTime);

  app.route('/checkEndTime/:comId/:ownerId/:cpId/:endTime')
    .get(leisurePark.checkEndTime);

  app.route('/getStartTimeforNext/:comId/:ownerId/:cpId')
    .get(leisurePark.getStartTimeforNext);

  app.route('/testTime')
    .get(leisurePark.testTime);
};
