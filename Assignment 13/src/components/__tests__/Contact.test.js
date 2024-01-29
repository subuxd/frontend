import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

// describe is used to group together multiple test cases
// it and test both are same thing it is just alias of test
describe("Contact Us Page Test Case", () => {
  // beforeAll(() => {
  //   console.log("Before All");
  // });

  // beforeEach(() => {
  //   console.log("Before Each");
  // });

  // afterAll(() => {
  //   console.log("After All");
  // });

  // afterEach(() => {
  //   console.log("After Each");
  // });

  test("Should load contact us component", () => {
    render(<Contact />); //this Contact page component will be rendered on the jsdom

    //   Querying
    const heading = screen.getByRole("heading"); //now we can test by checking if we get the correct heading or not when we render the component

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside contact component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("Should load input name inside contact component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("name");

    expect(inputName).toBeInTheDocument();
  });

  it("Should load 2 input boxes on the contact component", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");

    //   console.log(inputBoxes);

    expect(inputBoxes.length).toBe(2);
  });
});
