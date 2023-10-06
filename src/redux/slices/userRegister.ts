import { createSlice } from "@reduxjs/toolkit";

interface IRegisterUser
{
    name: string;
    email: string;
    password: string;
}

const initialRegisterState: IRegisterUser = {
    name: "",
    email: "",
    password: ""
}