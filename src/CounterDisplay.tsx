import { useContext } from 'react'
import { CounterContext } from './contexts/counterContext'

export default function CounterDisplay() {
    const count = useContext(CounterContext)
    return (
        <div className="flex min-h-[122px] flex-col items-center justify-center rounded-xl bg-indigo-50 px-4 py-5">
            <p className="mb-1 text-[11px] font-medium text-indigo-500">
                Current Count
            </p>

            <h2 className="text-5xl font-bold leading-tight text-indigo-600">
                {count}
            </h2>
        </div>
    )
}
