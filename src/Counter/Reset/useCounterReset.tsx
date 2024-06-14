import * as React from "react";
import {
	CounterRootState,
	useCounterRootState,
} from "../Root/CounterRootContext";

interface UseCounterResetParameters {
	rootState?: CounterRootState;
}

export function useCounterReset(params: UseCounterResetParameters = {}) {
	const stateFromContext = useCounterRootState();
	const { disabled, setValue } = params.rootState ?? stateFromContext;

	return React.useMemo(
		() => ({
			props: {
				onClick: () => {
					if (!disabled) {
						setValue(0);
					}
				},
				disabled,
			},
		}),
		[disabled, setValue]
	);
}
