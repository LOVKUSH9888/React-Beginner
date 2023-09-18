import { configureStore } from '@reduxjs/toolkit'
import React from 'react'

const Store = configureStore({
    reducer: {
        counter: counterReducer
    }
})

export default Store
