import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ChunkState {
    chunk: string;
}

const initialState: ChunkState = {
    chunk: "",
}

export const chunkSlice = createSlice({
    name: 'chunks',
    initialState,
    reducers: {
        put: (state, action: PayloadAction<string>) => {
            state.chunk = action.payload;
        },
        clear: () => initialState,
    }
});

export const { put, clear, } = chunkSlice.actions;
export default chunkSlice.reducer;