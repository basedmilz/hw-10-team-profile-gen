// Starter file provided by Instructor (03/09/2021) AC

const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
const newEmployee = new Employee();

expect(obj instanceof Arithmetic).toEqual(true);
expect(newEmployee instanceof Employee).toBe(true);


});

test("Can set name via constructor arguments", () => {
    expect(newEmployee instanceof Employee).toBe(true);
    const name = 'Mikey';
    const newEmployee = new Employee(name)

    // expect(obj.number).toEqual(num);
    expect(newEmployee.name).toBe(name)

});

test("Can set id via constructor argument", () => {
const id = 1;
const name = 'Mikey';
const newEmployee = new Employee(name , id);
expect(newEmployee.name).toEqual(name, id);

});

test("Can set email via constructor argument", () => {
const email = 'Mikey@empEmail.com';
const name = 'Mikey';
const id = 1;
const newEmployee = new Employee (name, id, email);

expect(newEmployee.email).toEqual(email);
});

test("Can get name via getName()", () => {
const name = 'Mikey';
const newEmployee = new Employee(name)

expect(newEmployee.getName()).toEqual(name)
});

test("Can get id via getId()", () => {
    const id =1;
    const name ="Mikey";
    const newEmployee = new Employee(name, id);
    
expect(newEmployee.getId()).toEqual(name, id)
});

test("Can get email via getEmail()", () => {
    const email = 'Mikey@empEmail.com';
    const id = 1;
    const name = "Mikey";
    const newEmployee = new Employee(name, id, email);

    expect(newEmployee.getEmail()).toEqual(name, id, email)

});

test("getRole() should return \"Employee\"", () => {
const role = 'Employee';
const newEmployee = new Employee(role);

expect(employee.getRole()).toEqual(role);
});
