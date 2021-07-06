const User = require('./User')


describe('User object', () => {
    const testUser = new User('Harry',23,'harryme@gmail.com','4356 5674 5434 4321' )

    test('name is of type string', () => {
        expect(typeof testUser.name).toBe('string')
    })



    test('age is of type number', () => {
        expect(testUser.age).toBe(23)

    })   

    test('email in valid format', () => {
        const userEmail = testUser.email
        const indexOfAT = userEmail.split('').indexOf('@')
        expect(userEmail.slice(indexOfAT)).toBe('@gmail.com')
    })

    test('download completed', () => {
        const scooterApp = testUser.download
        expect(scooterApp).toBeDefined()
    })

    test('the update user name changes this.name property', () => {
        testUser.updateUser('Cody')
        expect(testUser.name).toBe('Cody')
    })

    test('the age update method works', () => {
        testUser.updateAge(40)
        expect(testUser.age).toBe(40)
    })

    test('email method updates email', () => {
        testUser.updatedEmail('cody40@gmail.com')
        expect(testUser.email).toBe('cody40@gmail.com')
    })



})
