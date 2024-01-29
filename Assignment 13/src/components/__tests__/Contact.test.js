import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("Should Load Restaurant Menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Andhra Badshah Biryani (6)");

  fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(6);

  //till above my accordion is open
  //and now we will test if the add to cart button is working fine or not

  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart (1 items)")).toBeInTheDocument();

  //another test case when cart already has 1 item and we are adding another item
  fireEvent.click(addBtns[1]);
  expect(screen.getByText("Cart (2 items)")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(8);

  //now we will write the test case for clear cart
  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  expect(screen.getAllByTestId("foodItems").length).toBe(6);

  expect(
    screen.getByText("Cart is empty. Add items to the cart!")
  ).toBeInTheDocument();
});
