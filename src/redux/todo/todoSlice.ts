import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
  const response = await fetch("https://dummyjson.com/todos?limit=10");
  return await response.json();
});

interface todoData {
  title: string;
}

interface todo {
  isLoading: boolean;
  data: todoData[];
  isError: string | null;
}

const initialState: todo = {
  isLoading: true,
  data: [],
  isError: null,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        console.log("data fetched!");
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchTodos.pending, (state) => {
        console.log("data is being fetched!");
        state.isError = null;
        state.isLoading = true;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        console.log("data is rejected!");
        state.isError = action.error.message ?? null;
        state.isLoading = true;
      });
  },
});

export default todoSlice.reducer;
