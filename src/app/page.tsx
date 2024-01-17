import AddTodo from '@/components/shared/form/AddTodo'

export default function Home() {
  return (
    <main className="flex w-screen flex-col items-center justify-center py-24">
      <span className="text-3xl font-bold uppercase">To-do-app</span>
      <h1 className="mb-5  text-3xl font-bold uppercase ">
        {' '}
        Next.js
        <span className="ml-2 text-orange-700">Server Actions</span>
      </h1>
      <div className="justify-centeritems-center flex w-[1000px] flex-col rounded-md border border-orange-600 p-3">
        <AddTodo />
      </div>
    </main>
  )
}
