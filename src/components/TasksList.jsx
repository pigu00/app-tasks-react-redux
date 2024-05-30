import { useSelector, useDispatch } from "react-redux"
import {deleteTask} from '../features/tasks/taskSlice'
import { Link } from "react-router-dom"
export const TasksList = () => {

    const tasks =  useSelector(state => state.tasks)
    const dispatch = useDispatch()

    const handleDelete = (id)=>{
        dispatch(deleteTask(id))
    }

    console.log(tasks)

    return (

        <div className="w-4/6">
            <header className="flex justify-between items-center py-5">
                <h1 className="text-2xl flex justify-center">Tasks {tasks.length}</h1>
                <Link to='/create-task' className="bg-indigo-600 py-3 px-4 rounded text-white">Add Task</Link>
            </header>


            <div className="grid grid-cols-3 gap-4">

            {tasks.map(task => (
                <div className='bg-neutral-800 p-4 rounded p-4 rounded-md'> 
                <header className="flex justify-between">
                <h2 key={task.id}>{task.title}</h2>
                    <div className="flex gap-x-2"> 

                        
                        <Link to={`/edit-task/${task.id}`} className="bg-indigo-500 py-1 px-2 rounded text-sm">Edit</Link>
                        <button onClick={ ()=> handleDelete(task.id)} className="bg-red-500 py-1 px-2 rounded text-sm">Delete</button>

                    </div>
               
                </header>


                
                <p> {task.description}</p>
                

                </div>
            ))}

            </div>
        </div>
       
    )
}
