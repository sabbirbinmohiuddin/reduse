import { useContext } from 'react'
import { FiPlus } from 'react-icons/fi'
import { CounterReducerContext } from './contexts/counterContext'

export default function Increment() {

    const dispatch = useContext(CounterReducerContext)

    return (
        <button
            onClick={() => dispatch?.({ type: 'increment' })}
            className="flex min-h-[42px] items-center justify-center gap-2 rounded-lg bg-indigo-600 px-2 py-2.5 text-xs font-semibold text-white transition hover:bg-indigo-700 active:scale-[0.97]">
            <FiPlus size={15} />
            Increment
        </button>
    )
}


