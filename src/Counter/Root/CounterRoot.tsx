import * as React from "react";
import { CounterRootContext } from "./CounterRootContext";

export interface CounterRootProps {
	disabled?: boolean;
	step?: number;
	children?: React.ReactNode;
}

export function CounterRoot(props: CounterRootProps) {
	const { disabled = false, step = 1, children } = props;
	const [value, setValue] = React.useState(0);
	const state = { disabled, step, value, setValue };

	return (
		<CounterRootContext.Provider value={state}>
			<div className="counter">{children}</div>
		</CounterRootContext.Provider>
	);
}
