import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cellphone: '',
    name: '',
    lastName: '',
    motherLastName: '',
    birthDate: '',
    cp: '',
    street: '',
    city: '',
    locality: '',
    otp: '',
    rfc: '',
    curp:'',
    country: 'México'
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload.name;
        },
        setLastName: (state, action) => {
            state.lastName = action.payload.lastName;
        },
        setmotherLastName: (state, action) => {
            state.motherLastName = action.payload.motherLastName;
        },
        setcellphone: (state, action) => {
            state.cellphone = action.payload.cellphone;
        },
        setBirthDate: (state, action) => {
            state.birthDate = action.payload.birthDate;
        },
        setcp: (state, action) => {
            state.cp = action.payload.cp;
        },
        setStreet: (state, action) => {
            state.street = action.payload.street;
        },
        setCity: (state, action) => {
            state.city = action.payload.city;
        },
        setLocality: (state, action) => {
            state.locality = action.payload.locality;
        },
        setOtp: (state, action) => {
            state.otp = action.payload.otp;
        },
        setRfc: (state, action) => {
            state.rfc = action.payload.rfc;
        },
        setCurp: (state, action) => {
            state.curp = action.payload.curp;
        },

        clearResults: (state) => {
            state.cellphone = '';
            state.name = '';
            state.lastName = '';
            state.motherLastName = '';
            state.birthDate = '';
            state.cp = '';
            state.street = '';
            state.city = '';
            state.locality = '';
            state.otp = '';
            state.rfc = '';
            state.curp ='';
            state.country = 'México';
        },
    }
});

export const { 
    setName,
    setLastName,
    setmotherLastName,
    setcellphone,
    setcp,
    setStreet,
    setCity,
    setLocality,
    setOtp,
    setBirthDate,
    setRfc,
    clearResults,
    setCurp
} = userSlice.actions;

export default userSlice.reducer;
