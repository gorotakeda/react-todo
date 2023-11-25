import { useContext } from "react"
import { todoListContext } from "../pages/TodoList"

export const TodoItemId =  ({todoItemId}) => {
  const todoListItem = useContext(todoListContext)
  console.log(todoListItem)
  return (
    <>
      <div>TodoItemList</div>
      <div>{todoListItem.find(t => t.id === todoItemId).id}</div>
    </>
  )
}
