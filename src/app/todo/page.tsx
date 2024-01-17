import TodoForm from '@/components/todos/TodoForm'
import TodoLink from '@/components/todos/TodoLink'
import { Button } from '@/components/ui/button'
import { db } from '@/lib/db'
import Link from 'next/link'

const Todos = async () => {
  const todos = await db.todo.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  })
  return (
    <div className="flex  flex-col items-center justify-center">
      <Button asChild variant="outline" className="mt-4">
        <Link href="/">Home</Link>
      </Button>
      <h2 className="py-12 text-2xl font-bold">To Do</h2>

      <TodoForm />
      <div className="container mx-auto flex w-[800px] flex-col gap-y-4  py-5">
        {todos.map((todo) => (
          <TodoLink
            key={todo.id}
            id={todo.id}
            title={todo.title}
            isCompleted={todo.isCompleted}
          />
          //   <Link
          //   key={todo.id}
          //   href={`/todo/${todo.id}`}
          //   className="flex w-full  rounded-md border border-slate-400 px-12 py-2"
          // >
          //   <div className="" />
          //   <p className="relative font-semibold text-slate-900">
          //     {todo.title}
          //   </p>
          // </Link>
        ))}
      </div>
    </div>
  )
}

export default Todos
