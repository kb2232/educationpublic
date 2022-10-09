import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { wsListerner } from "./features";
const reduxstore = configureStore({
    reducer: {
        [wsListerner.reducerPath]: wsListerner.reducer
    },
    devTools: process.env.REACT_APP_API_ENDPOINT_DATA==="development"?true:false,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(wsListerner.middleware)
});

setupListeners(reduxstore.dispatch);
export default reduxstore;