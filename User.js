

class User {
    constructor(name,age,email,) {
        
            this.name = name 
            this.age = age
            this.email = email 
            this.download = () => {
                return(`Scooter App download complete ${this.name}`)
            }
            
        }
// methods to update the user name, age & email
        updateUser(updatedUser) {
            this.name = updatedUser
        }

        updateAge(updatedAge) {
            this.age = updatedAge
        }

        updatedEmail(updatedEmail) {
            this.email = updatedEmail
        }

    }

module.exports = User