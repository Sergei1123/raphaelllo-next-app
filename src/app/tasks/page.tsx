import { Suspense } from 'react'
import { cacheLife } from 'next/cache'
import TaskList from '@/src/components/TaskList/TaskList'

type Todo = {
  userId: number
  id: number
  title: string
  completed: boolean
}

async function getTasks(): Promise<Todo[]> {
  'use cache'
  cacheLife('hours')

  console.log('Запрос к API выполнен!')
  const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
  return res.json()
}

export default async function TasksPage() {
  const todos = await getTasks()

  return (
    <main>
        <Suspense fallback={<p>Загрузка...</p>}>
          <TaskList todos={todos} />
        </Suspense>
    </main>
  )
}