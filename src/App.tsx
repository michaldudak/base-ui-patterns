import * as React from 'react';
import './App.css';
import * as Counter from './Counter';
import * as ReducerCounter from './ReducerCounter';
import { CounterRootState, CounterAction } from './ReducerCounter';

function customReducer(
	state: CounterRootState,
	action: CounterAction,
	next: React.Reducer<CounterRootState, CounterAction>,
) {
	const newState = next(state, action);
	if (action.type === 'increment') {
		if (newState.value % 100 === 13) {
			return { ...newState, value: newState.value + 1 };
		}
	}

	return newState;
}

function App() {
	const [disabled, setDisabled] = React.useState(false);
	const [step, setStep] = React.useState(1);

	return (
		<div className="app">
			<div className="settings">
				<label>
					<input type="checkbox" checked={disabled} onChange={(e) => setDisabled(e.currentTarget.checked)} /> Disabled
				</label>

				<label>
					Step
					<input type="number" value={step} onChange={(e) => setStep(e.currentTarget.valueAsNumber)} />
				</label>
			</div>

			<Counter.Root disabled={disabled} step={step}>
				<p>State setters</p>
				<Counter.Display />
				<Counter.Increment />
				<Counter.Reset />
			</Counter.Root>

			<ReducerCounter.Root disabled={disabled} step={step}>
				<p>Reducer</p>
				<ReducerCounter.Display />
				<ReducerCounter.Increment />
				<ReducerCounter.Reset />
			</ReducerCounter.Root>

			<ReducerCounter.Root disabled={disabled} step={step} reducer={customReducer}>
				<p>Customized Reducer</p>
				<ReducerCounter.Display />
				<ReducerCounter.Increment />
				<ReducerCounter.Reset />
			</ReducerCounter.Root>
		</div>
	);
}

export default App;
