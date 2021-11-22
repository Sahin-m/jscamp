import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js";
import Customer from "../models/customer.js";
import user from "../models/user.js";
import User from "../models/user.js";
import UserService from "../services/userService.js"

console.log("User Component Yüklendi");

let logger1 = new BaseLogger()
let userService = new UserService(logger1)

let user1 = new User(1,"engin","demiroğ","Ankara")
let user2 = new User(2,"muhammed","şahin","mardin")
userService.add(user1)
userService.add(user2)





//prototyping
let customer = {id:1, firstName:"Engin"}

customer.lastName = "demiroğ";

console.log(customer.lastName);

console.log("---------");
userService.load()


let customerToAdd = new Customer(1,"Selim","Kurt","Ankara","sad")
customerToAdd.type = "customer"
userService.add(customerToAdd)
userService.add(new Customer(1,"Selim","Kurt","Ankara","sad"))
console.log(userService.customers);
console.log(userService.employees);
console.log(userService.errors);
console.log();