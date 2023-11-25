import { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import {Todo} from '../components/todo'
import {MessageLog} from '../components/messageLog'

export const todoListContext =  createContext()

export const TodoList = () => {

  const [todoList, setTodoList] = useState([
    { id: 1, title: "筋トレ", done: false, limit: new Date("2023", "10")},
    { id: 2, title: "勉強" ,done: false, limit: new Date("2023", "10")},
    { id: 3, title: "犬の散歩", done: false, limit: new Date("2023", "10")},
    { id: 4, title: "洗濯", done: false, limit: new Date("2023", "10")},
    { id: 5, title: "料理", done: false, limit: new Date("2023", "10")},
  ])


  const [count, setCount] = useState(0)

  const messageLog = useCallback(() => {
    console.log("logが出ました。")
  }, [])

  const setToggleDoneById = (todoId) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            done: !todo.done
          }
        } else {
          return todo
        }
      })
    )
  }

  const setTitleById = (todoId, title) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            title
          }
        } else {
          return todo
        }
      })
    )
  }

  const todoDoneCount = () => {
    return todoList.filter((todo) => todo.done).length
  }

  useEffect(() => {
    // 初期表示時のデータの取得（APIを叩いて最初に画面に表示しないといけないパラメータ）
    // データ変更時に再度APIからデータを取得したとき
    console.log("[]空配列なら初期表示")
  },[])

  useEffect(() => {
    console.log('todoListの値が変更された時に用のuseEffect', todoList)
  }, [todoList])

  return(
    <todoListContext.Provider value={todoList} >
    <div>
      <button onClick={() => setCount(count+1)}>+</button>
      カウント数{count}
      <p>TODO達成個数 {todoDoneCount()} / TODO数 { todoList.length }</p>

      {todoDoneCount === todoList.length && <p>全てのTODOを達成しました。</p>}

      <h1>TodoList</h1>
      {
        todoList.map((todo) => {
          return <Todo key={todo.id} todoItem={todo} setToggleDoneById={setToggleDoneById} setTitleById={setTitleById}/>
        })
      }
      <MessageLog props={messageLog} />
    </div>
    </todoListContext.Provider>
  );
}
