const { sum } = require("../sum");

test("Sum function should calculate the sum of two nos.", () => {
  const result = sum(2, 3);

  //   this below code is known as assertion
  expect(result).toBe(5);
});

// while running the code for the first time we'll get an error saying that jsx is not enabled so we've to install an package which will be given in the error itself
