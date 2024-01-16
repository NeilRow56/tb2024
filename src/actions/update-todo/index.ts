'use server'

import { InputType, ReturnType } from './types'
import { db } from '@/lib/db'
import { createSafeAction } from '@/lib/create-safe-action'
import { UpdateTodo } from './schema'
import { revalidatePath } from 'next/cache'

const handler = async (data: InputType): Promise<ReturnType> => {
  const { title, id } = data

  let todo

  try {
    todo = await db.todo.update({
      where: {
        id,
      },
      data: {
        title,
      },
    })
  } catch (error) {
    return {
      error: 'Failed to update.',
    }
  }
  revalidatePath(`/todo/${id}`)
  return { data: todo }
}

export const updateTodo = createSafeAction(UpdateTodo, handler)
