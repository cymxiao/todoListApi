
'use strict';
module.exports = function(app) {
  var xjMember = require('../controllers/xjMemberController');


app.route('/members')
.get(xjMember.list_all_xjMembers)
.post(xjMember.save_a_xjMember);

app.route('/member/:name') 
.get(xjMember.get_a_xjMember); 

app.route('/member/:xjMemberId') 
.post(xjMember.update_a_xjMember); 

};