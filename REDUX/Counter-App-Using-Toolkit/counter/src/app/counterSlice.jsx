import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },
    reducers: {
        incriment: () => {
            state.count += 1;
        },
        decriment: () => {
            state.count -= 1;
        }
    }
})

export default {incriment, decriment} = counterSlice.actions;

export default counterSlice.reducer;

