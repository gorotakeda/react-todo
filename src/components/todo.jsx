import React from "react"
import { TodoItemId } from "./TodoItemId";
import { useEmergencyWord } from "../hooks/useEmergencyWord";
import { useTodoToggle } from "../hooks/useTodoToggle";

export const Todo = ({todoItem, setToggleDoneById, setTitleById}) => {

  const ref = React.useRef();
  const {open, setOpen} = useTodoToggle();

  return (
    <>
      <div>Todo</div>
      {
        open && (
          <>
          <TodoItemId todoItemId={todoItem.id} />
          <div>
            <p>
              {todoItem.done ? '完了' : '未完了'}
            </p>
            {/* <p>{useEmergencyWord(todoItem.limit)}</p> */}
            <input type="checkbox" checked={todoItem.done} onChange={() => setToggleDoneById(todoItem.id)} />
          </div>
          <input type="text" value={todoItem.title}
              onChange={(event) => {
                setTitleById(todoItem.id, event.target.value)
              }}
          />
          <button onClick={() => setOpen(!open)}>閉じる</button>
        </>
        )}
      {
        !open && (
          <p onClick={() => setOpen(!open)}>開く</p>
        )
      }
    </>
  )
}

