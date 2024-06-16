import { CounterRootState } from './CounterRootContext';

export type CounterAction =
	| { type: 'increment' }
	| { type: 'reset' }
	| { type: 'updateSettings'; value: Partial<Pick<CounterRootState, 'disabled' | 'step'>> };

export function counterReducer(state: CounterRootState, action: CounterAction): CounterRootState {
	switch (action.type) {
		case 'increment':
			return { ...state, value: state.value + state.step };
		case 'reset':
			return { ...state, value: 0 };
		case 'updateSettings':
			return { ...state, ...action.value };
		default:
			return state;
	}
}
