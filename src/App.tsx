// import { FiMinus, FiPlus, FiRotateCcw } from "react-icons/fi";
import CounterDisplay from "./CounterDisplay";
import Decrement from "./Decrement";
import Increment from "./Increment";
import Reset from "./Reset";


export default function App() {


  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-8">
      <div className="w-full max-w-[340px] rounded-2xl bg-white p-5 shadow-lg shadow-slate-200/70 sm:p-6">

        {/* Header */}
        <div className="mb-5 text-center">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Counter App
          </h1>
          <p className="mt-1 text-xs text-slate-500">
            A simple counter using React
          </p>
        </div>

        {/* Counter Display */}
        <CounterDisplay />

        {/* Action Buttons */}
        <div className="mt-5 grid grid-cols-2 gap-2">
          <Decrement />

          <Increment />
        </div>

        {/* Reset Button */}
        <Reset />

      </div>
    </div>
  );
}