import { Todo } from '@prisma/client'
import TodoTitleForm from './TodoTitleForm'
import { TodoOptions } from './Options'
import { Button } from '../ui/button'
import Link from 'next/link'

interface NavbarProps {
  data: Todo
}

export const Navbar = async ({ data }: NavbarProps) => {
  return (
    <div className=" fixed  flex h-16 w-full items-center bg-green-200">
      <div className="container mx-auto flex gap-4">
        <div>
          <Button asChild variant="outline">
            <Link href="/">Home</Link>
          </Button>
        </div>
        <div>
          <Button asChild variant="primary" className="text-slate-100">
            <Link href="/todo">Todo Summary</Link>
          </Button>
        </div>
        <TodoTitleForm data={data} />

        <div className="ml-auto">
          <TodoOptions id={data.id} />
        </div>
      </div>
    </div>
  )
}
