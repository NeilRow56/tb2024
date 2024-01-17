'use client'
import { ElementRef, useRef, useState } from 'react'
import Form from './Form'

import { Todo } from '@prisma/client'

type AddTodoProps = {}

const AddTodo = ({}: AddTodoProps) => {
  return <Form />
}

export default AddTodo
