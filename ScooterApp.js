
class ScooterApp  {
    constructor(userRegisterNum,paymentInfo) {
        if(!paymentInfo) {
            throw new Error('payment information must be entered for to complete registration')
        }
       
        this.userRegisterNum = userRegisterNum
        this.chargeStationA = ''
        this.chargeStationB = ''
        this.scooter = []
        this.paymentInfo = paymentInfo
        this.paymentInfoSaved = () => {
            return(`Payment Info saved.Registration number: ${this.userRegisterNum}, Scooters ${this.scooter} Pickup Location: ${this.chargeStationA}, Return Location ${this.chargeStationB}`)
        }

        }

        setStationA(chargeStation) {
            this.chargeStationA = chargeStation
        }

        setstationB(chargeStation) {
            this.chargeStationB = chargeStation
        }

    }


module.exports = ScooterApp