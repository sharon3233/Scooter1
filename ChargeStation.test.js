const ChargeStation = require('./ChargeStation')
const ScooterApp = require('./ScooterApp')



describe('Charge Station objects', () => {
    const testChargeStation = new ChargeStation('Denton')
    

    test('ChargeStation is of type String', () => {
        expect(typeof testChargeStation.location).toBe('string')
    })

    test('Charge Station have charge ports avaiable', () => {
        const ports = testChargeStation.chargePort
        expect(ports).toBeDefined()
    })

    test('does charge station have any scooters', () => {
        const testScooter = new ScooterApp('S720','confirmed')
        testChargeStation.addScooter(testScooter)
        expect(testChargeStation.scooterList.length).toBe(1)
    })
})