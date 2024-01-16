'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { db } from '@/lib/db'
import { createSafeAction } from '@/lib/create-safe-action'

import { DeleteTodo } from './schema'
import { InputType, ReturnType } from './types'

const handler = async (data: InputType): Promise<ReturnType> => {
  const { id } = data
  let todo

  try {
    todo = await db.todo.delete({
      where: {
        id,
      },
    })
  } catch (error) {
    return {
      error: 'Failed to delete.',
    }
  }

  revalidatePath(`/todo/${id}`)
  redirect('/todo')
}

export const deleteTodo = createSafeAction(DeleteTodo, handler)
