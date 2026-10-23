import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("React Shopping Cart", () => {
test("displays the shopping cart heading", () => {
render(<App />);


expect(
  screen.getByRole("heading", { name: /shopping cart/i })
).toBeInTheDocument();


});

test("displays all products", () => {
render(<App />);

expect(
  screen.getByRole("heading", { name: "Laptop" })
).toBeInTheDocument();

expect(
  screen.getByRole("heading", { name: "Headphones" })
).toBeInTheDocument();

expect(
  screen.getByRole("heading", { name: "Mouse" })
).toBeInTheDocument();


});

test("displays the initial total", () => {
render(<App />);


expect(screen.getByText("Total: ₹52800")).toBeInTheDocument();


});

test("increases laptop quantity and updates the total", () => {
render(<App />);

fireEvent.click(
  screen.getByRole("button", {
    name: /increase laptop quantity/i,
  })
);

expect(screen.getByText("Quantity: 2")).toBeInTheDocument();
expect(screen.getByText("Total: ₹102800")).toBeInTheDocument();


});

test("decreases laptop quantity and updates the total", () => {
render(<App />);


fireEvent.click(
  screen.getByRole("button", {
    name: /increase laptop quantity/i,
  })
);

fireEvent.click(
  screen.getByRole("button", {
    name: /decrease laptop quantity/i,
  })
);

expect(screen.getAllByText("Quantity: 1")).toHaveLength(3);
expect(screen.getByText("Total: ₹52800")).toBeInTheDocument();


});

test("does not decrease quantity below one", () => {
render(<App />);


fireEvent.click(
  screen.getByRole("button", {
    name: /decrease laptop quantity/i,
  })
);

expect(screen.getAllByText("Quantity: 1")).toHaveLength(3);
expect(screen.getByText("Total: ₹52800")).toBeInTheDocument();


});
});
