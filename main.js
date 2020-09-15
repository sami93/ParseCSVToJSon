/**
 * Exercice duration : 45 minutes
 * With the given CSV file "employees.csv", create a JSON file "employeeBySkill.json" with following data :
 [
     { nom: 'cadoret', prenom: 'gael', age: '29', skill: 'php' },
     { nom: 'cadoret', prenom: 'gael', age: '29', skill: 'javascript' },
     { nom: 'cadoret', prenom: 'gael', age: '29', skill: 'nodejs' },
     { nom: 'dupond', prenom: 'bob', age: '42', skill: 'nodejs' }
 ]
 * TODO :
 * 1 - run command "yarn test" (watcher is active) until test pass !
 * 2 - Please fix TU inside "/modules/__tests__/transform.test.js" file (2 min)
 * 3 - Add your code to make the test pass (30 min)
 * 4 - Create the JSON file "employeeBySkill.json" (3 min)
 * 5 - ADVANCE: "Done!" must be the last message shown (NB: add log to watch order execution function) (10 min)
 */
// Node packages for file system
var { readFileCSV, generateJsonContent, generateJsonFile } = require('./modules')

// Start Exercice
// read File CSV with UTF-8
const csvFile = readFileCSV()
// Create Json Object
const json = generateJsonContent(csvFile)

generateJsonFile(json)

// End

/**
 * Your code here !
 */

console.log("Done!")
