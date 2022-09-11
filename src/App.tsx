import { MouseEvent, useState } from "react";
import "./App.css";
import { Counter } from "./components/Counter";
import { Heading } from "./components/Heading";

export function label(name: string) {
	return `Hello ${name.toUpperCase()}`;
}

function App() {
	const [count, setCount] = useState(0);

	const incrementCounter = (event: MouseEvent<HTMLElement>) => {
		const inc: number = event.shiftKey ? 10 : 1;
		console.log(inc);
		setCount(() => count + inc);
	};
	return (
		<div className="App">
			<Heading />
			<Counter count={count} onCounterincrease={incrementCounter} />
		</div>
	);
}

export default App;
