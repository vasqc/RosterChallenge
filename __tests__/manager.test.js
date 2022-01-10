const Engineer = require("../Roster/manager");

test("Can get office number", () => {
  const testValue = "";
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});



