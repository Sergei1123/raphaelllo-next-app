'use client'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useRouter } from 'next/navigation'
import { createPost } from './actions'

const schema = yup.object({
  title: yup.string().required('Заголовок обязателен'),
  body: yup.string().required('Текст обязателен'),
}).required()

type FormData = yup.InferType<typeof schema>

export default function CreatePostPage() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    await createPost(data)
    router.push('/posts')
  }

  return (
    <main>
      <h1>Создать пост</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input {...register('title')} placeholder="title" />
          {errors.title && <p role="alert">{errors.title.message}</p>}
        </div>
        <div>
          <textarea {...register('body')} placeholder="body" />
          {errors.body && <p role="alert">{errors.body.message}</p>}
        </div>
        <button type="submit">Создать пост</button>
      </form>
    </main>
  )
}