const Actor = require('./Actor')


describe('Actor Object', () => {
    const testActor = new Actor('Melvin','Irving')

    test('Actor name is of type string', () => {
        expect(typeof testActor.name).toBe('string')
    })

    
    test('Actor name is of type string', () => {
        expect(typeof testActor.location).toBe('string')
    })



    test('Actor has new User Order to fill ', () => {
        expect(Array.isArray(testActor.updateUser)).toBe(true)
    })

    test("chargeScooter", async () => {
        const scooter = new Actor()
        await scooter.chargeScooter(
            console.log("Charge completed")
        )
    })
})

