import { createContext, type Dispatch } from "react";

type CounterAction = {
    type: 'increment' | 'decrement' | 'reset'
}


export const CounterContext = createContext(0)
export const CounterReducerContext = createContext<Dispatch<CounterAction> | null>(null)