const ScooterApp = require('./ScooterApp')


describe('Scooter App Form', () => {
    const testAppReg = new ScooterApp('S700','confirmed')

    test('charge station has scooters', () => {
        expect(Array.isArray(testAppReg.scooter)).toBe(true)
    })

    test('Registration number', () => {
        expect(testAppReg.userRegisterNum).toBe('S700')
    })


    test('Has a pickup charge Station', () => {
        testAppReg.setStationA('Dallas')
        expect(testAppReg.chargeStationA).toBe('Dallas')
    })

    test('has a return charge station', () => {
        testAppReg.setstationB('Fort Worth')
        expect(testAppReg.chargeStationB).toBe('Fort Worth')
    })

    test('throws error if payment info is not entered', () => {
        expect(() => new ScooterApp()).toThrowError('payment information must be entered for to complete registration')
    })


    test('payment informaton', () => {
        const payment = testAppReg.paymentInfoSaved
        expect(payment).toBeDefined()
    })

    
})