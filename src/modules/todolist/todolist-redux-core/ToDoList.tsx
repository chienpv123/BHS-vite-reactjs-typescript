import React, { useEffect, useState } from 'react'
import tw from 'twin.macro'
import { useDispatch, useSelector } from 'react-redux'
import { Description } from '../../../components'
import { RootState } from '../../../redux-core/ConfigureStore'
import { ITodo, deleteTodo, toggletodo } from '../../../redux-core/todo'

const ToDoList: React.FC = () => {
  // const todos = useSelector((state: RootState) => state.todos.todos)

  const { todos: res } = useSelector((state: RootState) => state?.todos)
  const [todos, setTodos] = useState<ITodo[]>([]);
  useEffect(() => {
    setTodos(res);
  })
  const dispatch = useDispatch()
  return (
    <>
      {todos?.length > 0 && (
        <div tw="w-[60%] h-auto mx-auto flex flex-col gap-y-2">
          {todos.map(todo => (
            <div
              key={todo.id}
              tw="w-full min-h-[52px] px-[30px] flex items-center justify-between rounded-[8px] border border-solid border-[#D9DDFE] "
            >
              <div tw="flex w-[90%] h-full py-2">
                <input
                  onChange={() => dispatch(toggletodo(todo.id))}
                  type="checkbox"
                  defaultChecked={todo.completed}
                  tw="mr-5 w-5 cursor-pointer shrink-0"
                />
                <Description tw="m-0 w-fit flex-1 text-left">{todo.text}</Description>
              </div>
              <button
                onClick={() => dispatch(deleteTodo(todo.id))}
                tw="bg-transparent cursor-pointer"
              >
                <img
                  tw="w-[36px]"
                  src="/assets/icons/common/delete-left-svgrepo-com.png"
                  alt="delete task"
                />
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default ToDoList
