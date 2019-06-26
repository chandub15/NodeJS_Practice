var express = require('express');
var router = express.Router();
var appService = require('../../services/app-service')
// var customers = [
//   { id: 1, name: 'chandu', email: 'cbomm@in.ibm.com', address: 'India', phone: '9014243818' },
//   { id: 2, name: 'chandu', email: 'cbomm@in.ibm.com', address: 'India', phone: '9014243818' },
//   { id: 3, name: 'chandu', email: 'cbomm@in.ibm.com', address: 'India', phone: '9014243818' },
//   { id: 4, name: 'chandu', email: 'cbomm@in.ibm.com', address: 'India', phone: '9014243818' }
// ];
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send(customerService.getCustomers());
  // res.send('/login')
});

router.post('/login', function (req, res, next) {
  if (req.body.username == req.body.password) {
    appService.setUsername(req.body.username);
    res.send({ result: 'success' });
  } else {
    res.send({ result: 'fail' });
  }
});
module.exports = router;
