import { useCounterRootState } from "../Root/CounterRootContext";

export function CounterDisplay() {
	const rootState = useCounterRootState();
	return <pre>{rootState!.value}</pre>;
}
