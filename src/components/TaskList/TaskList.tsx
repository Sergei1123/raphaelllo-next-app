'use client'

import TaskCard from '@/src/components/TaskCard/TaskCard'

type Todo = {
  userId: number
  id: number
  title: string
  completed: boolean
}

type Props = {
  todos: Todo[]
}

export default function TaskList({ todos }: Props) {
  return (
    <div>
      <h1>Task List</h1>
      {todos.map((todo) => (
        <TaskCard key={todo.id} todo={todo} />
      ))}
    </div>
  )
}