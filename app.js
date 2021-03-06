// Starter file provided by Instructor (03/09/2021) AC

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
// function renderHtml(HTML) {
//     fs.writeFile (outputPath, render(final), err => {
//         if (err) {
//             return console.log(err)
//         }
//     })
// }

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
console.log(1)
// function getManager () {
const final = []

const startPrompt = () => {

    inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: "Is the employee a Engineer, Manager or Intern?. ",
            choices: ["Engineer", "Manager", "Intern", "None"]
        },
    ]).then(function (data) {
        console.log(data)
        if (data.choice === 'Manager') {
            ManagerInput()
        }

        if (data.choice === 'Engineer') {
            getEngineer()
        }
        if (data.choice === 'Intern') {
            getIntern()
        }
        if (data.choice === 'None') {

            conCat()
        }
    })
}
const conCat = () => {
    console.log(final)
    fs.writeFile(outputPath, render(final), err => {
        if (err) {
            return console.log(err)
        }
    })
}

const ManagerInput = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the manager's name?"



        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's id?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email?"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office number?"
        }
    ]).then(function (data) {
        let choiceManager = new Manager(data.name, data.id, data.email, data.officeNumber)
        final.push(choiceManager)
        startPrompt()
    })

    // }).then
    //     (fs.writeFile(outputPath, render(final), err => {
    //         if (err) {
    //             return console.log(err)
    //         }
    //     }))



}

const getIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?"



        },
        {
            type: 'input',
            name: 'id',
            message: "What is the intern's id?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email?"
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the intern's school?"
        }
    ]).then(function (data) {
        let choiceIntern = new Intern(data.name, data.id, data.email, data.school)
        final.push(choiceIntern)
        startPrompt()
    })
    // }).then(fs.writeFile(outputPath, render(final), err => {
    //     if (err) {
    //         return console.log(err)
    //     }
    // }))
}

const getEngineer = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the employee's name?"



        },
        {
            type: 'input',
            name: 'id',
            message: "What is the employee's id?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email?"
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's github?"
        }
    ]).then(function (data) {
        let choiceEngineer = new Engineer(data.name, data.id, data.email, data.github)
        console.log(data)
        final.push(choiceEngineer)
        startPrompt()
    })
    // .then(fs.writeFile(outputPath, render(final), err => {
    // //     if (err) {
    // //         return console.log(err)
    // //     }
    // // }))
}
startPrompt()




// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
