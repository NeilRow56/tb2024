import { notFound, redirect } from 'next/navigation'

import { db } from '@/lib/db'
import { Navbar } from '@/components/todos/Navbar'

export async function generateMetadata({
  params,
}: {
  params: { todoId: string }
}) {
  const todo = await db.todo.findUnique({
    where: {
      id: params.todoId,
    },
  })

  return {
    title: todo?.title || 'Todo',
  }
}

const TodoIdLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode
  params: { todoId: string }
}) => {
  const todo = await db.todo.findUnique({
    where: {
      id: params.todoId,
    },
  })

  if (!todo) {
    notFound()
  }

  return (
    <main className="h-full bg-blue-200 ">
      <Navbar data={todo} />
      {children}
    </main>
  )
}

export default TodoIdLayout
