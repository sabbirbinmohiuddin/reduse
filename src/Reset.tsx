import { useContext } from 'react'
import { FiRotateCcw } from 'react-icons/fi'
import { CounterReducerContext } from './contexts/counterContext'

export default function Reset() {
    const dispatch = useContext(CounterReducerContext)
    return (
        <button
            onClick={() => dispatch?.({ type: 'reset' })}
            className="mt-2 flex min-h-[38px] w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-600 transition hover:bg-slate-50 active:scale-[0.98]"
        >
            <FiRotateCcw size={14} />
            Reset Counter
        </button>
    )
}
