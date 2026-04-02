import TaskList from '@/src/components/TaskList/TaskList'

type Todo = {
  userId: number
  id: number
  title: string
  completed: boolean
}

export default async function TasksPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
  const todos: Todo[] = await res.json()

  return (
    <main>
      <TaskList todos={todos} />
    </main>
  )
}