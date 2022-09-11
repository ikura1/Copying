import { render } from "@testing-library/react";
import { Counter } from "./Counter";

test("should render a labeel and counter", () => {
	const { getByTestId } = render(<Counter label={"Current"} />);
	const label = getByTestId("counter-label");
	expect(label).toBeInTheDocument();
	const counter = getByTestId("counter");
	expect(counter).toBeInTheDocument();
});

test("should start at another value", () => {
	const { getByTestId } = render(<Counter start={10} />);
	const counter = getByTestId("counter");
	expect(counter).toHaveTextContent("10");
});
