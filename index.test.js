const {sum} = require('./index');
console.log(sum(10,12));
test("test1", ()=>{
    expect(sum(10,24)).toBe(34);
})