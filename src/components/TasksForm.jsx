import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import {addTask, updateTask} from '../features/tasks/taskSlice'
import {v4 as uuid} from 'uuid'
import { useNavigate, useParams } from "react-router"

export const TasksForm = () => {

  
  const [task, setTask] = useState({
    title: "",
    description: ""
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()
  const tasks = useSelector (state => state.tasks)

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    })

  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (params.id) {
      
       dispatch(updateTask(task))

      } else {

        dispatch(
          addTask({
          ...task,
          id: uuid()
        }))

      }
    navigate('/')
    
  }

  useEffect(() => {
    if (params.id) {
          setTask(tasks.find(task => task.id === params.id))
    }
  }, [params.id, tasks])


  return (
    <form onSubmit={handleSubmit} className="bg-zinc-800 max-w-sm p-4 ">
      <label htmlFor="title" className="block text-xs font-bold mb-2">Task:</label>
      <input name='title' 
      type="text" 
      placeholder="Title" 
      onChange={handleChange} 
      value={task.title} 
      className="bg-zinc-700 w-full p-2 mb-2 rounded-md"
      />
      <label htmlFor="description" className="block text-xs font-bold mb-2">Description:</label>
      <textarea 
      name="description" 
      placeholder="Description" 
      onChange={handleChange}
      value={task.description}
      className="bg-zinc-700 w-full p-2 mb-2 rounded-md"
      > </textarea>
      <button type="submit" className="bg-indigo-700 py-2 px-4 rounded-md">Save</button>
    </form>

  )
}
