const Engineer = require("../Roster/intern");

test("Can name new intern", () => {
  const testValue = "Intern";
  const e = new Engineer("Foo", 1, "internName", testValue);
  expect(e.github).toBe(testValue);
});