import { Todo } from '@prisma/client'
import TodoTitleForm from './TodoTitleForm'
import { TodoOptions } from './Options'

interface NavbarProps {
  data: Todo
}

export const Navbar = async ({ data }: NavbarProps) => {
  return (
    <div className=" fixed  flex h-14 w-full items-center bg-green-200">
      <div className="container mx-auto flex">
        <TodoTitleForm data={data} />
        <div className="ml-auto">
          <TodoOptions id={data.id} />
        </div>
      </div>
    </div>
  )
}
