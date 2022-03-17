import { configureStore } from '@reduxjs/toolkit'
import darkModeChange from './darkmode'

export default configureStore({
  reducer: {
    darkMode: darkModeChange
  }
})