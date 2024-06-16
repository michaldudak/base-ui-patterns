import * as React from 'react';
import { CounterAction } from './counterReducer';

export interface CounterRootState {
	disabled: boolean;
	step: number;
	value: number;
}

type CounterRootContextValue = {
	state: CounterRootState;
	dispatch: React.Dispatch<CounterAction>;
};

export const CounterRootContext = React.createContext<CounterRootContextValue | null>(null);

export function useCounterRootState() {
	const context = React.useContext(CounterRootContext);
	if (context == null) {
		throw 'useCounterRootState must be called within Counter.Root';
	}

	return context;
}
