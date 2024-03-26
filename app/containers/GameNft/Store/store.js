import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import tokenReducer, { tokenSaga } from './tokenSlice';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        token: tokenReducer,
    },
    middleware: [sagaMiddleware],
});

sageMiddleware.run(tokenSaga);