import { useState } from "react"

export const Todo = ({}) => {
  const [todo, setTodo] = useState('筋トレ')
  return (
    <>
      <div>Todo</div>
      <input type="text" value={todo}
          onChange={(e) => {
            setTodo(e.target.value)
          }}
      />
    </>
  )
}

