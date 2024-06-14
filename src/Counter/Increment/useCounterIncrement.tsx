import * as React from "react";
import {
	CounterRootState,
	useCounterRootState,
} from "../Root/CounterRootContext";

interface UseCounterIncrementParameters {
	rootState?: CounterRootState;
}

export function useCounterIncrement(
	params: UseCounterIncrementParameters = {}
) {
	const stateFromContext = useCounterRootState();
	const { disabled, setValue, step } = params.rootState ?? stateFromContext;

	return React.useMemo(
		() => ({
			props: {
				onClick: () => {
					if (!disabled) {
						setValue((v) => v + step);
					}
				},
				disabled,
			},
		}),
		[disabled, setValue, step]
	);
}
