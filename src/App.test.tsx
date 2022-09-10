import React from "react";
import { render, screen } from "@testing-library/react";
import App, { label } from "./App";

test("renders learn react link", () => {
	render(<App />);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});

test("generates a label", () => {
	const result = label("React");
	expect(result).toEqual("Hello REACT");
});
