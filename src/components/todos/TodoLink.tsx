'use client'

import Link from 'next/link'
import ChangeTodo from './ChangeTodo'

interface TodoLinkProps {
  id: string
  title: string
  isCompleted: boolean
}

const TodoLink = ({ id, title, isCompleted }: TodoLinkProps) => {
  return (
    <Link
      key={id}
      href={`/todo/${id}`}
      className="flex w-full  rounded-md border border-slate-400 px-10 py-2"
    >
      <ChangeTodo isCompleted={isCompleted} id={id} />
      <div className="" />
      <p className="relative font-semibold text-slate-900">{title}</p>
    </Link>
  )
}

export default TodoLink
