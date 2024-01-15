import { z } from 'zod'

export const CreateTodo = z.object({
  title: z
    .string({
      required_error: 'Title is required',
      invalid_type_error: 'Title is required',
    })
    .min(3, {
      message: 'Title must have at least three characters.',
    }),
})
