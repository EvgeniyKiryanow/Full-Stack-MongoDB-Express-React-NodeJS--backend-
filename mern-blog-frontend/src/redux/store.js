import {configureStore} from "@reduxjs/toolkit";

import {postsRedicer} from "./slices/posts"

import {authReducer} from "./slices/auth"
const store  = configureStore({
    reducer: {
        posts: postsRedicer,
        auth: authReducer
    }
});

export default store;