// ? REDUX.JS TOOLKIT
    import {configureStore} from '@reduxjs/toolkit';

// ? REDUCERS:
    import users from './reducers/users';
    import languages from './reducers/lang';


export default configureStore({
    reducer: {
        users,
        languages
    }
})
