import { configureStore } from '@reduxjs/toolkit';
import mainSlice from './mainSlice/main.slice';
import caseStudySlice from './caseStudySlice/caseStudy.slice';
import latestProjectSlice from './latestProject/latestProject.slice';



const store = configureStore({
    reducer:{
        mainSlice,
        caseStudySlice,
        latestProjectSlice
    }
});

export default store;