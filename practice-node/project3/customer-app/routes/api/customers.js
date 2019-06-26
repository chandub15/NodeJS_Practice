var express = require('express');
var router = express.Router();
var customerService= require('../../services/customer-service');
// var customers=[
//   {id:1,name:'chandu',email:'cbomm@in.ibm.com',address:'India',phone:'9014243818'},
//   {id:2,name:'chandu',email:'cbomm@in.ibm.com',address:'India',phone:'9014243818'},
//   {id:3,name:'chandu',email:'cbomm@in.ibm.com',address:'India',phone:'9014243818'},
//   {id:4,name:'chandu',email:'cbomm@in.ibm.com',address:'India',phone:'9014243818'}
// ];
/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log(customerService.getCustomers());
    
  res.send(customerService.getCustomers());
  // res.send('/login')
});

router.post('/customers',function(req,res,next){
  if(req.body.username == req.body.password){
    res.send({result:'success'});
  }else{
    res.send({result:'fail'});
  }
});

router.post('/', function(req, res, next) {
	customerService.addCustomer(req.body);
	res.send({result:'success', msg:'customer added successfully.'});
});

router.delete('/', function(req, res, next) {
	customerService.deleteCustomer(req.body.id);
	res.send({result:'success', msg:'customer deleted successfully.'});
});

router.get('/edit/:id', function(req, res) {
  console.log("id is "+req.params.id);
  res.render('edit-customer', 
  	{ title: 'Update Customer', data:customerService.getCustomerById(req.params.id)});
});

router.put('/', function(req, res, next) {
  console.log("in put");
  console.log(req.body.id);
	customerService.updateCustomer(req.body);
	res.send({result:'success', msg:'customer added successfully.'});
});



module.exports = router;
