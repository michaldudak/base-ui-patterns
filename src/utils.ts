export type ChainedReducer<State, Action> = (state: State, action: Action, next: React.Reducer<State, Action>) => State;

export function combineReducers<State, Action>(
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
