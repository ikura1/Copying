import "./App.css";
import { Heading } from "./components/Heading";

export function label(name: string) {
	return `Hello ${name.toUpperCase()}`;
}

function App() {
	return (
		<div className="App">
			<Heading />
		</div>
	);
}

export default App;
