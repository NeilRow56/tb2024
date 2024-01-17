'use client'

import { useRouter } from 'next/navigation'
import { FormInput } from './form-input'
import { FormSubmit } from './form-submit'

import { useAction } from '@/hooks/use-action'
import { createTodo } from '@/actions/create-todo'
import { toast } from 'sonner'

const Form = () => {
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
    <form action={onSubmit} className="my-4 space-y-4">
      <div className="space-y-4">
        <FormInput
          id="title"
          label="Todo title"
          type="text"
          placeholder="To do..."
        />
      </div>
      <FormSubmit className="w-full text-slate-100">Create</FormSubmit>
    </form>
  )
}

export default Form
