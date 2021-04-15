// Starter file provided by Instructor (03/09/2021) AC

const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
const newEmployee = new Employee();

// expect(obj instanceof Arithmetic).toBe(true);
expect(newEmployee instanceof Employee).toEqual(true);


});

test("Can set name via constructor arguments", () => {
   
    const name = 'Mikey';
    const newEmployee = new Employee(name)

    // expect(obj.number).toBe(num);
    expect(newEmployee.name).toBe(name)

});

test("Can set id via constructor argument", () => {
const newId = 1;

const newEmployee = new Employee(1 , newId);
expect(newEmployee.id).toBe(newId);

});

test("Can set email via constructor argument", () => {
const newEmail = 'Mikey@gmailll.com';
const name = 'Mikey';
const newEmployee = new Employee (newEmail);

expect(newEmployee.email).toBe(newEmail);
});

test("Can get name via getName()", () => {
const name = 'Mikey';
const newEmployee = new Employee(name)

expect(newEmployee.getName()).toBe(name)
});

test("Can get id via getId()", () => {
    const id =1;

    const newEmployee = new Employee(id);
    
expect(newEmployee.getId()).toBe(id);
});

test("Can get email via getEmail()", () => {
    const mEmail = 'Mikey@ggmail.com';
    
    const newEmployee = new Employee('Mikey', mEmail);

    expect(newEmployee.getEmail()).toBe(mEmail);

});

test("getRole() should return \"Employee\"", () => {
const newRole = 'Employee';
const newEmployee = new Employee('Mikey', 1, '');

expect(employee.getRole()).toBe(newRole);
});
