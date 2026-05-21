'use client'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useRouter } from 'next/navigation'

const schema = yup.object({
  user_name: yup.string().required('Имя пользователя обязательно'),
  email: yup.string().email('Некорректный email').required('Email обязателен'),
  age: yup.number()
    .positive('Возраст должен быть положительным')
    .integer('Возраст должен быть целым числом')
    .required('Возраст обязателен'),
  password: yup.string()
    .min(6, 'Пароль минимум 6 символов')
    .required('Пароль обязателен'),
  confirm_password: yup.string()
    .oneOf([yup.ref('password')], 'Пароли не совпадают')
    .required('Подтверждение пароля обязательно'),
}).required()

type FormData = yup.InferType<typeof schema>

export default function RegisterPage() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: FormData) => {
    console.log(data)
    router.push('/posts')
  }

  return (
    <main>
      <h1>Регистрация</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input {...register('user_name')} placeholder="user_name" />
          {errors.user_name && <p role="alert">{errors.user_name.message}</p>}
        </div>
        <div>
          <input {...register('email')} placeholder="email" />
          {errors.email && <p role="alert">{errors.email.message}</p>}
        </div>
        <div>
          <input {...register('age')} placeholder="age" type="number" />
          {errors.age && <p role="alert">{errors.age.message}</p>}
        </div>
        <div>
          <input {...register('password')} placeholder="password" type="password" />
          {errors.password && <p role="alert">{errors.password.message}</p>}
        </div>
        <div>
          <input {...register('confirm_password')} placeholder="confirm_password" type="password" />
          {errors.confirm_password && <p role="alert">{errors.confirm_password.message}</p>}
        </div>
        <button type="submit">Зарегистрироваться</button>
      </form>
    </main>
  )
}