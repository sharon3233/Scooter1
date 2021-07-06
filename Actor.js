const ScooterApp = require('./ScooterApp')

class Actor  {
    constructor(name,location) {
        this.name = name 
        this.location = location 
        this.updateUser = []
        

    }

    addUser(newCustomer) {
        this.updateUser.push(newCustomer)
    }

   async chargeScooter() {
       console.log('Starting Charge')

       await new Promise(resolve => setTimeout(resolve, 1500))

       console.log('Charge complete scooter ready for pick up')
        
    }
}

module.exports =  Actor