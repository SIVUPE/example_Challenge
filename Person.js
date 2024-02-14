class Person{
    static count = 0
    constructor(){
        this.firstName = 'Please provide your first name'
        this.lastNamee = 'Please provide your last name'
        this.age = 0
        Person.count += 1
    }
    set FirstName(value){
        this.firstName = value
    }
    get  FirstName(){
        return this.firstName
    }
    set LastName(value) {
        return this.lastName = value
    }
    get LastName() {
        return this.lastName
    }
    set Age(value) {
        return this.age = value
    }
    get age() {
        return this.age
    }
    display() { 
        console.log(`
        ======Person ID: ${this.count}======
        First name: ${this.FirstName}
        Last name: ${this.LastName}
        Age ${this.Age}
        ====================================
        `
     );
    }

}
export{
    Person
}
