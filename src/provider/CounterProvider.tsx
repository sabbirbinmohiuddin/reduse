import { useReducer, type ReactNode } from "react"
import counterReducer from "../reducers/counterReducer"
import { CounterContext, CounterReducerContext } from "../contexts/counterContext"

export default function CounterProvider({ children }: { children: ReactNode }) {
    const [count, dispatch] = useReducer(
        (currentCount, action) => counterReducer(currentCount, action) ?? currentCount,
        0
    )
    return (
        <CounterContext value={count}>
            <CounterReducerContext value={dispatch}>
                {children}
            </CounterReducerContext>

        </CounterContext>
    )
}