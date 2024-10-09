import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface IAuthState {
    bookState: [];
}

const initialState: IAuthState = {
    bookState: [],
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setbookState: (state: any, action: PayloadAction<boolean>) => {
            state.authState = action.payload;
            state.authState = state.authState.add(action.payload)

        },
    },
});

export const { setAuthState } = authSlice.actions;
export const authReducer = authSlice.reducer;