import * as React from 'react';
import { CounterRootState, useCounterRootState } from '../Root/CounterRootContext';
import { CounterAction } from '../Root/counterReducer';

interface UseCounterResetParameters {
	rootState?: CounterRootState;
	dispatch?: React.Dispatch<CounterAction>;
}

export function useCounterReset(params: UseCounterResetParameters = {}) {
	const context = useCounterRootState();
	const { disabled } = params.rootState ?? context.state;
	const dispatch = params.dispatch ?? context.dispatch;

	return React.useMemo(
		() => ({
			props: {
				onClick: () => {
					dispatch({ type: 'reset' });
				},
				disabled,
			},
		}),
		[disabled, dispatch],
	);
}
