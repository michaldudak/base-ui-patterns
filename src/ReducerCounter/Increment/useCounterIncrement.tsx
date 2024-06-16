import * as React from 'react';
import { CounterRootState, useCounterRootState } from '../Root/CounterRootContext';
import { CounterAction } from '../Root/counterReducer';

interface UseCounterIncrementParameters {
	rootState?: CounterRootState;
	dispatch?: React.Dispatch<CounterAction>;
}

export function useCounterIncrement(params: UseCounterIncrementParameters = {}) {
	const context = useCounterRootState();
	const { disabled } = params.rootState ?? context.state;
	const dispatch = params.dispatch ?? context.dispatch;

	return React.useMemo(
		() => ({
			props: {
				onClick: () => {
					dispatch({ type: 'increment' });
				},
				disabled,
			},
		}),
		[disabled, dispatch],
	);
}
