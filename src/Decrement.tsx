import { useContext } from 'react'
import { FiMinus } from 'react-icons/fi'
import { CounterReducerContext } from './contexts/counterContext'


export default function Decrement() {
    const dispatch = useContext(CounterReducerContext)
    return (
        <button
            onClick={() => dispatch?.({ type: 'decrement' })}
            className="flex min-h-[42px] items-center justify-center gap-2 rounded-lg bg-rose-500 px-2 py-2.5 text-xs font-semibold text-white transition hover:bg-rose-600 active:scale-[0.97]"
        >
            <FiMinus size={15} />
            Decrement
        </button>
    )
}
