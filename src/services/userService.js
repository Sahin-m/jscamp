import { users } from "../data/users.js"
import dataError from "../models/dataError.js"

export default class UserService{
    constructor(loggerService){
        this.employees = []
        this.customers = []
        this.errors = []
        this.loggerService = loggerService
    }
    load(){
        for (const user of users) {
            switch (user.type) {
                case "customer":
                    if(!this.CheckCustomerValidityForErrors(user)){
                        this.customers.push(user)                        
                    }
                    break;
                case "employee":
                    if(!this.CheckEmployeeValidityForErrors(user)){
                        this.employees.push(user)                        
                    }
                    break;
                default:
                    this.errors.push(new dataError("Wrong User Type", user)) 
                    break;
            }
        }
    }

    //formik-yup
    CheckCustomerValidityForErrors(user){
        let requiredFields = "id firstName lastName age city".split(" ")
        let hasErrors = false
        for (const field of requiredFields) {
            if(!user[field]){
                hasErrors = true
                this.errors.push(new dataError(`Validation problem. ${field} is required`,user))
            }
        }
        if (Number.isNaN(Number.parseInt(+user.age))) {
            hasErrors = true
            this.errors.push(new dataError(`Validation problem. ${user.age} is not a number`,user))
        }
        return hasErrors
    }
    CheckEmployeeValidityForErrors(user){
        let requiredFields = "id firstName lastName age city salary".split(" ")
        let hasErrors = false
        for (const field of requiredFields) {
            if(!user[field]){
                hasErrors = true
                this.errors.push(new dataError(`Validation problem. ${field} is required`,user))
            }
        }
        if (Number.isNaN(Number.parseInt(user.age))) {
            hasErrors = true
            this.errors.push(new dataError(`Validation problem. ${user.age} is not a number`,user))
        }
        return hasErrors
    }

    add(user){
       switch (user.type) {
            case "customer":
                if(!this.CheckCustomerValidityForErrors(user)){
                    this.customers.push(user)                        
                }
                break;
            case "employee":
                if(!this.CheckEmployeeValidityForErrors(user)){
                    this.employees.push(user)                        
                }
                break;
            default:
                this.errors.push(new dataError("This User Cannot Be Added. Wrong User Type", user)) 
                break;
       }
       this.loggerService.log(user)
    }

    listCustomers(){
        return this.customers
    }
    listEmployee(){
        return this.employees
    }

    getCustomerById(id){
        return this.customers.find(u=>u.id == id)
    }

    getCustomersSorted(){
        return this.customers.sort((customer1,customer2)=>{
            if (customer1.firstName<customer2.firstName) {//2:27
                return -1;
            }else if(customer1.firstName===customer2.firstName){
                return 0;
            }else{
                return 1;
            }
            
        })
    }

}