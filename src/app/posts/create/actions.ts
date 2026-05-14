'use server'

import { revalidatePath } from 'next/cache'

export async function createPost(data: { title: string; body: string }) {
  await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  })
  revalidatePath('/posts')
}