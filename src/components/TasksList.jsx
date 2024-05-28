import { useSelector } from "react-redux"


export const TasksList = () => {

    const tasks =  useSelector(state => state.tasks)

    console.log(tasks)

    return (

        <div>
            {tasks.map(task => (
                <div> 
                <h3 key={task.id}>{task.title}</h3>
                <p> {task.description}</p>
                
                </div>
            ))}
        </div>
       
    )
}
