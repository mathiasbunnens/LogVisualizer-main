import { createSlice } from '@reduxjs/toolkit'

export const darkMode = createSlice({
  name: 'darkMode',
  initialState: {
    value: false
  },
  reducers: {
    changeMode: state => {
      state.value = !state.value
    }
  }
})

export const { changeMode } = darkMode.actions

export default darkMode.reducer