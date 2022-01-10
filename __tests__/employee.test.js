const Employee = require("../Roster/employee");

test("Creating a new Employee", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

