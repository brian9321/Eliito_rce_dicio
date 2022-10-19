import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showModal: false,
    timeSendOtp: 30,
    showNotification: 0,
    showLoading: false,
    showErrorPhone: false,
    showFailResponse: false,
    showSuccessResponse: false,
    responseBasic: {
        code: '',
        message: '',
        statusCode: 0,
        success: false,
        data: {
            start: false
        }
    }
}

export const appSlice = createSlice({
    name: 'app',
    initialState: initialState,
    reducers: {
        setShowModal: (state, action) => {
            state.showModal = action.payload.showModal;
        },
        startLoading: (state, action) => {
            state.showLoading = action.payload.show;
        },
        startNotification: (state, action) => {
            state.showNotification = action.payload.notification;
        },
        setResponseBasic: (state, action) => {
            state.responseBasic = action.payload.data
        },
        setShowErrorPhone: (state, action) => {
            state.showErrorPhone = action.payload.show
        },
        setShowFailResponse: (state, action) => {
            state.showFailResponse = action.payload.show
        },
        setShowSuccessResponse: (state, action) => {
            state.showSuccessResponse = action.payload.show
        },
        setTimeSendOtp: (state, action) => {
            state.timeSendOtp = action.payload.time
        },
        clearData: (state) => {
            state.showModal= false;
            state.timeSendOtp= 30;
            state.showNotification= 0;
            state.showLoading= false;
            state.showErrorPhone= false;
            state.showFailResponse= false;
            state.showSuccessResponse= false;
            state.responseBasic= {
                code: '',
                message: '',
                statusCode: 0,
                success: false,
                data: {
                    start: false
                }
            }
        }
    }
});

export const { 
    setShowModal,
    startLoading,
    setResponseBasic,
    startNotification,
    setShowErrorPhone,
    setShowFailResponse,
    setTimeSendOtp,
    setShowSuccessResponse,
    clearData
} = appSlice.actions;

export default appSlice.reducer;
