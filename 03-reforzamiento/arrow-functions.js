//let greeting = () => 'Hola Mundo';
//console.log(greeting());


//NO SE PUEDEN HACER ARROW FUNCTIONS SI ESTAMOS TRABAJANDO CON "this"
let deadpool = {
    firstName: 'Wade',
    lastName: 'Winston',
    power: 'Regeneration',
    getName() {
        return `${this.firstName} ${this.lastName} - poder: ${this.power}`;
    }
};

console.log(deadpool.getName());