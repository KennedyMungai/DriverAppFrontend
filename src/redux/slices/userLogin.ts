import { createSlice } from "@reduxjs/toolkit";

interface ILoginUser
{
    email: string;
    password: string;
}

const initialLoginState: ILoginUser = {
    email: "",
    password: ""
} 