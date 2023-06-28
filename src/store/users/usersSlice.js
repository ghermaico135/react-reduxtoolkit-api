/** @format */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const randomUserUrl = "https://randomuser.me/api/?results=5";
// const randomUserUrl = "https://jsonplaceholder.typicode.com/posts";

export const fetchUsers = createAsyncThunk(
	"users/fetchUsers",
	async (name, thunkAPI) => {
		try {
			const response = await fetch(randomUserUrl);
			const data = await response.json();
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue("something went wrong");
		}
	}
);

const initialState = {
	users: [],
	isLoading: false,
	error: undefined,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchUsers.pending, (state, action) => {
			state.isLoading = true;
		}),
			builder.addCase(fetchUsers.fulfilled, (state, action) => {
				state.users = action.payload;
				state.isLoading = false;
			}),
			builder.addCase(fetchUsers.rejected, (state, action) => {
				state.isLoading = false;
				state.error = "something went wrong";
			});
	},
});

export const { actions } = userSlice;
export default userSlice.reducer;
