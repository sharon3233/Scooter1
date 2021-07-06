
class ChargeStation {
    constructor(location) {
        this.location = location 
        this.chargePort = () => {
            return(`This ${this.location} location has charge ports avaible for use.`)
        }
        this.scooterList = []
        
    }

    addScooter(scooter) {
        this.scooterList.push(scooter)
    }

    addChargeStation(updatedLocation) {
        this.location = updatedLocation
    }
}

module.exports = ChargeStation