var service = {};
var customers = [
{id:"1",
name:"Vivek", 
email:"vivek@gmail.com",
phone:"987634252",
address:"India",
},
{id:2,
name:"Rama",
 email:"rama@gmail.com",
 address:"Hyderabad",
 phone:"9028982344"
},
{id:3,
name:"Samridh",
 email:"samridh@gmail.com",
 address:"Indore",
 phone:"9027652344"
}
];

service.getCustomers = function(){
    console.log(customers);
	return customers;
}

service.addCustomer = function(customer){
	// customer.id = Math.round(Math.random(1000)*100000);
    // customers.push(customer);
    

    let d = new Date(); 
	customer.id = d.getTime(); 
	customers.push(customer);
}

service.updateCustomer = function(customer){
    console.log(customer);
	for (var i = 0; i < customers.length; i++) {
		if(customers[i].id == customer.id){
			customers[i] = customer;
			return;
		}
	}
}

service.deleteCustomer = function(id){
    console.log("in delete");
	var newList=[];
	for(var i=0;i<customers.length;i++){
		if(id != customers[i].id){
			newList.push(customers[i]);
		}
	}
	customers = newList;
}

service.getCustomerById =function(id){
	for (var i = 0; i < customers.length; i++) {
		if(customers[i].id == id){
			return customers[i];
		}
	}
	return {};
}


// customerService.addCustomer =function(customer){
// 	let d = new Date(); 
// 	customer.id = d.getTime(); 
// 	customers.push(customer);
// }
module.exports = service;