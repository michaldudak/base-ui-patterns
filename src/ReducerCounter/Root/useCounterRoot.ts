import * as React from 'react';
import { ChainedReducer, combineReducers } from '../../utils';
import { CounterRootState } from './CounterRootContext';
import { CounterAction, counterReducer } from './counterReducer';

export interface UseCounterRootParameters {
	disabled: boolean;
	step: number;
	reducer?: ChainedReducer<CounterRootState, CounterAction>;
}

export function useCounterRoot(parameters: UseCounterRootParameters) {
	const { disabled, step, reducer } = parameters;

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const chainedReducers = React.useCallback(combineReducers(reducer, counterReducer), [reducer]);
	const [state, dispatch] = React.useReducer(chainedReducers, { disabled, step, value: 0 });

	React.useEffect(() => {
		dispatch({ type: 'updateSettings', value: { disabled, step } });
	});

	return {
		state,
		dispatch,
	};
}
