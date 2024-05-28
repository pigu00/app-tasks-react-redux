import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    {id:'1',
    title: 'Task1',
    description: 'Description Task 1',
    completed: false    
    },
    {id:'2',
    title: 'Task2',
    description: 'Description Task 2',
    completed: false    
    }
]

export const taskSlice = createSlice({
    name:'tasks',
    initialState,
    reducers:{
        
    }
})

export default taskSlice.reducer