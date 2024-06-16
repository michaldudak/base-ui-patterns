import { useCounterRootState } from '../Root/CounterRootContext';

export function CounterDisplay() {
	const { state } = useCounterRootState();
	return <pre>{state.value}</pre>;
}
