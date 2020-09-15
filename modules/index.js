const fs = require('fs')
const EMPLOYEES_FILENAME = "employees.csv"
const EMPLOYEES_BY_SKILL_FILENAME = "employeesBySkill.json"

const readFileCSV = () => {
    // Read CSV
    let csvFile = fs.readFileSync(
        `./${EMPLOYEES_FILENAME}`,
        { encoding: "utf-8" }
    )

    // Split on row
    csvFile = csvFile.split("\n")
    return csvFile
}

const generateJsonContent = (csvFile) => {
    // do not take headers (first line)
    csvFile.shift()
    var json = []
    csvFile.forEach(item => {
        // Loop through each row
        const employeetemplate = {
            nom: "",
            prenom: "",
            age: "",
            skill: "",
        }

        row = item.split(";")

        employeetemplate.nom = row[0]
        employeetemplate.prenom = row[1]
        employeetemplate.age = row[2]

        // take last Element
        const lastItem = row[row.length - 1]
        skillsRow = lastItem.split(",")

        // Parse Skills Table
        skillsRow.forEach((skill) => {
            const employeeCopyObject = { ...employeetemplate }
            employeeCopyObject.skill = skill
            json.push(employeeCopyObject)
        })
    })
    return json
}

const transform = (data) => {
    const json = []
    data.forEach(jsonItem => {
        // Loop through each row
        // take last Element
        const lastItem = jsonItem.skills
        skillsRow = lastItem.split(",")

        // Parse Skills Table
        skillsRow.forEach((skill) => {
            const employeeCopyObject = { ...jsonItem }
            employeeCopyObject.skill = skill
            // delete attribute skills
            delete employeeCopyObject.skills
            json.push(employeeCopyObject)
        })
    })
    return json
}

const generateJsonFile = (objectJson) => {
    fs.writeFileSync(`./${EMPLOYEES_BY_SKILL_FILENAME}`, JSON.stringify(objectJson))
}

module.exports = { readFileCSV, generateJsonContent, generateJsonFile, transform }

