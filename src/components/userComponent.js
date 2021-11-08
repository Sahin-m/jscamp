import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js";
import User from "../models/user.js";
import UserService from "../services/userService.js"

console.log("User Component Yüklendi");

let logger1 = new BaseLogger()
let userService = new UserService(logger1)

let user1 = new User(1,"engin","demiroğ","Ankara")
let user2 = new User(2,"muhammed","şahin","mardin")
userService.add(user1)
userService.add(user2)

console.log(userService.list());
console.log(userService.getById(2));


userService.getById(1)
userService.list()


//prototyping
let customer = {id:1, firstName:"Engin"}

customer.lastName = "demiroğ";

console.log(customer.lastName);