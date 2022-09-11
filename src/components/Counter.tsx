import { Component } from "react";

export type CounterProps = { label?: string; start?: number };

const initialState = { count: 0 };
export type CounterState = Readonly<typeof initialState>;

export class Counter extends Component<CounterProps, CounterState> {
	state: CounterState = {
		count: 0,
	};

	componentDidMount() {
		if (this.props.start) {
			this.setState({
				count: this.props.start,
			});
		}
	}

	render() {
		return (
			<div>
				<div data-testid="counter-label">Count</div>
				<div data-testid="counter">{this.state.count}</div>
			</div>
		);
	}
}
