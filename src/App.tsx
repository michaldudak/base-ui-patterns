import * as React from 'react';
import './App.css';
import * as Counter from './Counter';
import * as ReducerCounter from './ReducerCounter';

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
		</div>
	);
}

export default App;
