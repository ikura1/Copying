import { fireEvent, render } from "@testing-library/react";
import { Counter } from "./Counter";

test("should render a label and counter", () => {
	const handler = jest.fn();
	const { getByTestId } = render(
		<Counter count={0} onCounterincrease={handler} />,
	);
	const label = getByTestId("counter-label");
	expect(label).toBeInTheDocument();
	const counter = getByTestId("counter");
	expect(counter).toBeInTheDocument();
});

test("should render a counter with custom label", () => {
	const handler = jest.fn();
	const { getByTestId } = render(
		<Counter label={"Current"} count={0} onCounterincrease={handler} />,
	);
	const label = getByTestId("counter-label");
	expect(label).toBeInTheDocument();
});

test("should start at zero", () => {
	const handler = jest.fn();
	const { getByTestId } = render(
		<Counter count={0} onCounterincrease={handler} />,
	);
	const counter = getByTestId("counter");
	expect(counter).toHaveTextContent("0");
});

test("should start at another value", () => {
	const handler = jest.fn();
	const { getByTestId } = render(
		<Counter count={10} onCounterincrease={handler} />,
	);
	const counter = getByTestId("counter");
	expect(counter).toHaveTextContent("10");
});

test("should increment the count by one", () => {
	const handler = jest.fn();
	handler.bind(1);
	const { getByRole } = render(
		<Counter count={0} onCounterincrease={handler} />,
	);
	const counter = getByRole("button");
	expect(counter).toHaveTextContent("0");
	fireEvent.click(counter);
	expect(counter).toHaveTextContent("1");
});
