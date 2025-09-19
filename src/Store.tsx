
import { configureStore } from '@reduxjs/toolkit'
import BasicSlice from './features/BasicSlice' 

const Store = configureStore({
    reducer: {
        basic: BasicSlice,
    }
})

export default Store