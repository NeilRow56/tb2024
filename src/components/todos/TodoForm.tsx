'use client'

import React from 'react'
import { FormInput } from '../shared/form/form-input'
import { FormSubmit } from '../shared/form/form-submit'
import { useRouter } from 'next/navigation'

import { useAction } from '@/hooks/use-action'
import { createTodo } from '@/actions/create-todo'
import { toast } from 'sonner'

type Props = {}

const TodoForm = (props: Props) => {
  const router = useRouter()
  const { execute, fieldErrors } = useAction(createTodo, {
    onSuccess: (data) => {
      toast.success('Todo created!')

      router.push(`/todo/${data.id}`)
    },
    onError: (error) => {
      toast.error(error)
    },
  })

  const onSubmit = (formData: FormData) => {
    const title = formData.get('title') as string

    execute({ title })
  }
  return (
    <div className="container mx-auto flex w-[600px] flex-col items-center justify-center rounded-md border border-slate-400 p-4">
      <h2 className="text-xl font-bold">To do Form</h2>
      <form action={onSubmit} className="my-4 space-y-4">
        <div className="space-y-4">
          <FormInput
            id="title"
            label="Todo title"
            type="text"
            errors={fieldErrors}
          />
        </div>
        <FormSubmit className="w-full text-slate-100">Create</FormSubmit>
      </form>
    </div>
  )
}

export default TodoForm
