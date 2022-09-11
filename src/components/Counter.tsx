import React, { Component } from "react";

export type CounterProps = {
	label?: string;
	count: number;
	onCounterincrease: (event: React.MouseEvent<HTMLElement>) => void;
};

const initialState = { count: 0 };
export type CounterState = Readonly<typeof initialState>;

export class Counter extends Component<CounterProps, CounterState> {
	// readonly state: CounterState = initialState;
	constructor(props: CounterProps) {
		super(props);
	}

	render() {
		const { label = "Count", count, onCounterincrease } = this.props;
		return (
			<div>
				<label data-testid="counter-label">{label}</label>
				<button data-testid="counter" onClick={onCounterincrease}>
					{count}
				</button>
			</div>
		);
	}
}
