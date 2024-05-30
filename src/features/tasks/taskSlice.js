import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    {
        id: '1',
        title: 'Task1',
        description: 'Description Task 1',
        completed: false
    },
    {
        id: '2',
        title: 'Task2',
        description: 'Description Task 2',
        completed: false
    }
]

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload)
        },
        deleteTask: (state, action) => {
            return state.filter((task) => task.id !== action.payload)
        },
        updateTask: (state, action) => {
            const { id, title, description } = action.payload

            const foundTask = state.find((task) => task.id === id)
            if (foundTask) {
                foundTask.title = title
                foundTask.description = description
            }
        }
    }
})

export const { addTask, updateTask , deleteTask } = taskSlice.actions;

export default taskSlice.reducer