var express = require('express');
var router = express.Router();
var appService = require('../../services/app-service')
var customerService = require('../../services/customer-service');
/* GET home page. */
router.get('/dashboard', function (req, res, next) {
  res.render('dashboard', { title: 'Dashboard', name: appService.getUsername() });
});

router.get('/customers', function (req, res, next) {
  res.render('customers', { title: 'Customers', name: appService.getUsername(),data: customerService.getCustomers() });
});

router.get('/about', function (req, res, next) {
  res.render('about', { title: 'About', name: appService.getUsername() });
});

router.get('/addCustomer', function(req, res) {
  res.render('add-customer', 
  	{ title: 'Add Customer'});
})

  module.exports = router;
