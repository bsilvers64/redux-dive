import { createSlice} from "@reduxjs/toolkit";


// if this prop is false, then it means that modal is closed, used to control when the modal displays
const initialState = {
    isOpen: false
}

const modalSlice = createSlice({
    name:'modal',
    initialState,
    reducers: {
        openModal: (state) => {
            state.isOpen = true
        },
        closeModal: (state) => {
            state.isOpen = false
        },
    },
});


export const {openModal, closeModal} = modalSlice.actions

// add this to the store's definition which reuires all reducers
export default modalSlice.reducer