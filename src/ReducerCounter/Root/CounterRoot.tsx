import * as React from 'react';
import { CounterRootContext, CounterRootState } from './CounterRootContext';
import { CounterAction, counterReducer } from './counterReducer';

export interface CounterRootProps {
	disabled?: boolean;
	step?: number;
	children?: React.ReactNode;
	reducer?: ChainedReducer<CounterRootState, CounterAction>;
}
type ChainedReducer<State, Action> = (state: State, action: Action, next: React.Reducer<State, Action>) => State;

function combineReducers<State, Action>(
	their: ChainedReducer<State, Action> | undefined,
	our: React.Reducer<State, Action>,
) {
	if (their) {
		return (state: State, action: Action) => {
			return their(state, action, our);
		};
	}
	return our;
}

export function CounterRoot(props: CounterRootProps) {
	const { disabled = false, step = 1, children, reducer } = props;

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const chainedReducers = React.useCallback(combineReducers(reducer, counterReducer), [reducer]);
	const [state, dispatch] = React.useReducer(chainedReducers, { disabled, step, value: 0 });
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
