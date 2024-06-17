import * as React from 'react';
import { CounterRootContext } from './CounterRootContext';
import { UseCounterRootParameters, useCounterRoot } from './useCounterRoot';

export interface CounterRootProps extends Partial<UseCounterRootParameters> {
	children?: React.ReactNode;
}

export function CounterRoot(props: CounterRootProps) {
	const { children, disabled = false, step = 1, reducer } = props;

	const { state, dispatch } = useCounterRoot({ disabled, step, reducer });
	const context = React.useMemo(() => ({ state, dispatch }), [state, dispatch]);

	return (
		<CounterRootContext.Provider value={context}>
			<div className="counter">{children}</div>
		</CounterRootContext.Provider>
	);
}
