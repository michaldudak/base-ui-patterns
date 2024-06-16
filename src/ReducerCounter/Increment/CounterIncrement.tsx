import * as React from "react";
import { useCounterIncrement } from "./useCounterIncrement";

export function CounterIncrement() {
	const { props } = useCounterIncrement();

	return <button {...props}>Increment</button>;
}
