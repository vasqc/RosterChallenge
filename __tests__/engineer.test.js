const Engineer = require("../Roster/engineer");

test("Can set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("foo", 1, "test@test.com", testValue);
  expect(e.github).toBe(testValue);
});