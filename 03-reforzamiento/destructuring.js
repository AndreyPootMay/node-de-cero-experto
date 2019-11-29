let deadpool = {
    firstName: 'Wade',
    lastName: 'Winston',
    power: 'Regeneration',
    getName: function () {
        return `${this.firstName} ${this.lastName} - poder: ${this.power}`;
    }
};

//En el caso de no querer utilizar el nombre "firstName" para nuestra variable, la podemos renombrar
let {name: firstName, lastName, power} = deadpool;

console.log(firstName, lastName, power);