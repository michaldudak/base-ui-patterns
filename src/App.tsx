import * as React from "react";
import "./App.css";
import * as Counter from "./Counter";

function App() {
	const [disabled, setDisabled] = React.useState(false);
	const [step, setStep] = React.useState(1);

	return (
		<div className="app">
			<div className="settings">
				<label>
					<input
						type="checkbox"
						checked={disabled}
						onChange={(e) => setDisabled(e.currentTarget.checked)}
					/>{" "}
					Disabled
				</label>

				<label>
					Step
					<input
						type="number"
						value={step}
						onChange={(e) => setStep(e.currentTarget.valueAsNumber)}
					/>
				</label>
			</div>

			<Counter.Root disabled={disabled} step={step}>
				<Counter.Display />
				<Counter.Increment />
				<Counter.Reset />
			</Counter.Root>
		</div>
	);
}

export default App;
