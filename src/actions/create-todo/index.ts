'use server'

import { revalidatePath } from 'next/cache'

import { db } from '@/lib/db'
import { createSafeAction } from '@/lib/create-safe-action'

import { InputType, ReturnType } from './types'
import { CreateTodo } from './schema'

const handler = async (data: InputType): Promise<ReturnType> => {
  // Authorization check when we have
  // const { userId} = auth();

  // if (!userId ) {
  //   return {
  //     error: "Unauthorized",
  //   };
  // }

  const { title } = data

  let todo

  try {
    todo = await db.todo.create({
      data: {
        title,
      },
    })
  } catch (error) {
    return {
      error: 'Failed to create.',
    }
  }

  revalidatePath(`/todo/${todo.id}`)
  return { data: todo }
}

export const createTodo = createSafeAction(CreateTodo, handler)
