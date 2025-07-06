import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
    name: "notification",
    initialState: {
        notification: [{
            offer: [
                {
                    id: 1,
                    title: "Offer 1",
                    description: "Offer 1 description",
                },
            ],
            promo: [
                {
                    id: 1,
                    title: "Promo 1",
                    description: "Promo 1 description",
                },
            ],
            order: [
                {
                    id: 1,
                    title: "Order 1",
                    description: "Order 1 description",
                },
            ],
        }
        ],
    },
    reducers: {
        setNotification: (state, action) => {
            state.notification = action.payload;
        },
    },
});

export const { setNotification } = notificationSlice.actions;

export default notificationSlice.reducer;

