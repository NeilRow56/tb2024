import { ReplaceAll } from 'lucide-react'
import { Button } from '../ui/button'

interface ChangeTodoProps {
  isCompleted: boolean
  id: string
}

const ChangeTodo = ({ isCompleted, id }: ChangeTodoProps) => {
  return (
    <form className="pr-3">
      <input type="hidden" name="inputId" value={id} />

      <Button type="submit" variant="outline" className="bg-slate-200">
        <ReplaceAll className="bg-slate-200 text-orange-800" />
      </Button>
    </form>
  )
}

export default ChangeTodo
