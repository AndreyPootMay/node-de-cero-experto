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
let getEmployeeById = async(id) => {
    
    let employeeDB = employees.find(employee => employee.id === id);

    if (!employeeDB) {
        throw new Error(`No existe un empleado con el ID ${id}`);
    } else {
        return employeeDB;
    }
}

let getSalary = async(employee) => {
    let salaryDB = salaries.find(salary => salary.id === employee.id);
    if (!salaryDB) {
        throw new Error(`No se encontró un salario para el usuario ${ employee.name }`);
    } else {
        return {
            name: employee.name,
            salary: salaryDB.salary,
            id: employee.id
        };
    }
}

let getInfo = async(id) => {
    let employee = await getEmployeeById(id);
    let salary = await getSalary(employee);

    return `El empleado ${employee.name} tiene un salario de $${salary.salary}`;
}

getInfo(3).then(res => {
    console.log(res);
}).catch(e => {
    console.log(e);
});