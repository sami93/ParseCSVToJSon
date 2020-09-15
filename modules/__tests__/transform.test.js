const { transform } = require("../../modules");

const data = [
    {
        nom: 'cadoret',
        prenom: 'gael',
        age: '29',
        skills: 'php,javascript,nodejs'
    },
    {
        nom: 'dupond',
        prenom: 'bob',
        age: '42',
        skills: 'nodejs'
    }
];

const expectedResult = [
    { nom: 'cadoret', prenom: 'gael', age: '29', skill: 'php' },
    { nom: 'cadoret', prenom: 'gael', age: '29', skill: 'javascript' },
    { nom: 'cadoret', prenom: 'gael', age: '29', skill: 'nodejs' },
    { nom: 'dupond', prenom: 'bob', age: '42', skill: 'nodejs' },
];

describe("transform", () => {
    it("should transform properly the given object", () => {
        const result = transform(data);
        expect(result).toStrictEqual(expectedResult);
    })
})