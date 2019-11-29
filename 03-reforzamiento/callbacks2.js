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

let getEmployeeById = (id, callback) => {
    let employeeDB = employees.find(employee => employee.id === id);

    if (!employeeDB) {
        callback(`No existe un empleado con el ID ${id}`);
    } else {
        callback(null, employeeDB);
    }
}

let getSalary = (employee, callback) => {
    let salaryDB = salaries.find(salary => salary.id === employee.id);

    if (!salaryDB) {
        callback(`No se encontró un salario para el usuario ${ employee.name }`);
    } else {
        callback(null, {
            name: employee.name,
            salary: salaryDB.salary,
            id: employee.id
        });
    }
}


/**
 * Callback que regresa un empleado y re-utiliza al empleado para la bd
 * si no existe la instancia mandamos un error de acuerdo al callback correspondiente.
 */
getEmployeeById(1, (err, employee) => {
    if (err) {
        return console.log(err);
    }

    getSalary(employee, (err, resp) => {
        if (err) {
            return console.log(err);
        }

        console.log(`El salario del empleado ${ resp.name } es de $${resp.salary}`)
    })
});