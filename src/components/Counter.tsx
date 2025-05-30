import { decrement, increment } from "../redux/counter/counterSlice"
import { useAppDispatch, useAppSelector } from "../redux/hooks"

const Counter : React.FC = () => {
    const count = useAppSelector(state => state.counter)
    const dispatch = useAppDispatch()
  return (
    <>
        <div>count {count}</div>
        <button onClick={() => dispatch(increment())}>click me!</button>
        <button onClick={() => dispatch(decrement())}>click me!</button>

    </>
  )
}

export default Counter