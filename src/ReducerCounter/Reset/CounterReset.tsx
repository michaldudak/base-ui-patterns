import * as React from 'react';
import { useCounterReset } from './useCounterReset';

export function CounterReset() {
	const { props } = useCounterReset();

	return <button {...props}>Reset</button>;
}
