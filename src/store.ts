import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'

export type MessagesState = string[];

const initialState = [] as MessagesState;

const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        addMessage(state, action: PayloadAction<string>) {
            state.unshift(action.payload);
        },
    }
});

export const { addMessage } = messagesSlice.actions
export const store = configureStore({
    reducer: {
        messages: messagesSlice.reducer
    }
}) 
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch