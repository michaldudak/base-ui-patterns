import * as React from 'react';
import { CounterRootContext } from './CounterRootContext';
import { counterReducer } from './counterReducer';

export interface CounterRootProps {
	disabled?: boolean;
	step?: number;
	children?: React.ReactNode;
}

export function CounterRoot(props: CounterRootProps) {
	const { disabled = false, step = 1, children } = props;
	const [state, dispatch] = React.useReducer(counterReducer, { disabled, step, value: 0 });
	const context = { state, dispatch };

	React.useEffect(() => {
		dispatch({ type: 'updateSettings', value: { disabled, step } });
	});

	return (
		<CounterRootContext.Provider value={context}>
			<div className="counter">{children}</div>
		</CounterRootContext.Provider>
	);
}
