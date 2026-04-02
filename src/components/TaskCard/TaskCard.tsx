'use client'

import { useState } from 'react'

type Todo = {
  userId: number
  id: number
  title: string
  completed: boolean
}

type Props = {
  todo: Todo
}

export default function TaskCard({ todo }: Props) {
  const [isCompleted, setIsCompleted] = useState(todo.completed)

  return (
    <div
      onClick={() => setIsCompleted(!isCompleted)}
      style={{
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        padding: '16px',
        marginBottom: '12px',
        cursor: 'pointer',
        backgroundColor: isCompleted ? '#f0fdf4' : '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ fontSize: '20px' }}>
          {isCompleted ? '✅' : '⭕'}
        </span>
        <div>
          <p style={{
            margin: 0,
            fontWeight: 'bold',
            textDecoration: isCompleted ? 'line-through' : 'none',
            color: isCompleted ? '#888' : '#000',
          }}>
            {todo.title}
          </p>
          <p style={{ margin: 0, fontSize: '12px', color: '#888' }}>
            ID: {todo.id} • User: {todo.userId}
          </p>
        </div>
      </div>
      <span style={{
        padding: '4px 12px',
        borderRadius: '20px',
        fontSize: '12px',
        backgroundColor: isCompleted ? '#1F2D3D' : 'transparent',
        color: isCompleted ? '#fff' : '#888',
        border: '1px solid #e0e0e0',
      }}>
        {isCompleted ? 'Completed' : 'In Progress'}
      </span>
    </div>
  )
}