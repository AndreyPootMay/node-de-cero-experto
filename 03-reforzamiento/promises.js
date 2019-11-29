let employees = [{
    id: 1,
    name: 'Niger'
},{
    id: 2,
    name: 'Josefa'
}, {
    id: 3,
    name: 'Maria'
}, {
    id: 4,
    name: 'Carlos'
}];

let salaries = [{
    id: 1,
    salary: 1000
}, {
    id: 2,
    salary: 2000
}];

/**
 * Recibe un solo parámetro y no es ningún callback inicial
 * solo ocupa 3 callbacks en la parte de la promesa, solo retorno un objeto dentro del método
 * "resolve".
 * @param {int} id 
 */
let getEmployeeById = (id) => {
    
    return new Promise( (resolve, reject) => {
        let employeeDB = employees.find(employee => employee.id === id);

        if (!employeeDB) {
            reject(`No existe un empleado con el ID ${id}`);
        } else {
            resolve(employeeDB);
        }
    });
}

let getSalary = (employee) => {
    return new Promise((resolve, reject) => {
        let salaryDB = salaries.find(salary => salary.id === employee.id);
        if (!salaryDB) {
            reject(`No se encontró un salario para el usuario ${ employee.name }`);
        } else {
            resolve({
                name: employee.name,
                salary: salaryDB.salary,
                id: employee.id
            });
        }
    });
}

//NOTE: LO HICE VANIA c:
getEmployeeById(1).then((employee) => {
    getSalary(employee).then((resp) => {
        console.log(`El salario del empleado ${ resp.name } es de $${resp.salary}`)
    }, (err) => {
        console.log(err);
    })
}, (err) => {
    console.log(err);
});