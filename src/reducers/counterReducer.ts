

type CounterAction = {
    type: 'increment' | 'decrement' | 'reset'
}

export default function counterReducer(count: number, action: CounterAction) {
    if (action.type == 'increment') {
        return count + 1;
    }
    else if (action.type == 'decrement') {
        return count > 0 ? count - 1 : 0
    }
    else if (action.type == 'reset') {
        return count > 0 ? 0 : 0
    }
}