import { configureStore } from '@reduxjs/toolkit';

import Bag from './reducers/bag';


export default configureStore({
    reducer : {
        bag : Bag
    }
})