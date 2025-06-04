import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface PostState {
  title: string;
  content: string;
}

interface PostSliceState {
  posts: PostState[];
}

const initialState: PostSliceState = {
  posts: [],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<PostState>) => {
      state.posts.push(action.payload);
    },
  },
});

export const { addPost } = postSlice.actions;
export default postSlice.reducer;
