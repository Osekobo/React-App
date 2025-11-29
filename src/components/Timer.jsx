import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0)
  useEffect(
    () => {
      setTimeout(
        () => { setCount(count + 1) }, 1000
      )
    }
  )
  return (
    <>
      Timer:<b>{count}</b>
    </>
  )
}
export default Timer;