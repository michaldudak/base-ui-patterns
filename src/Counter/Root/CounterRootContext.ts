import * as React from "react";

export interface CounterRootState {
	disabled: boolean;
	step: number;
	value: number;
	setValue: React.Dispatch<React.SetStateAction<number>>;
}

export const CounterRootContext = React.createContext<CounterRootState | null>(
	null
);

export function useCounterRootState() {
	const context = React.useContext(CounterRootContext);
	if (context == null) {
		throw "useCounterRootState must be called within Counter.Root";
	}

	return context;
}
