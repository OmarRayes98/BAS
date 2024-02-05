import { createSlice } from '@reduxjs/toolkit';
import { fetchServices ,fetchReviews,fetchFAQ ,fetchTeam,postContact} from './main.action';


const initialState = {

    // carusalImages:[],
    // carusalText:{
    // },
    // aboutText:{
    // },

    // news:{
    // },

    // loadingImages :false,
    // loadingTexts :false,
    services:[],
    loadingService:false,
    reviews:[],
    loadingReview:false,
    faqArray:[],
    loadingFaq:false,
    team:[],
    loadingTeam:false,

    post:{},
    loadingConstact:false,



}

const mainSlice = createSlice({
    name: "main",
    initialState ,

    reducers:{

    },

    extraReducers: (builder)=> {

        builder.addCase(fetchServices.pending, (state)=>{
            state.loadingService =true;

        });

        builder.addCase(fetchServices.fulfilled, (state,action)=>{

            state.services=  action.payload;
                
            state.loadingService =false;
        });

        builder.addCase(fetchServices.rejected, (state)=>{
            state.loadingService =false;
            state.services = []
        });


        builder.addCase(fetchReviews.pending, (state)=>{
            state.loadingReview =true;

        });

        builder.addCase(fetchReviews.fulfilled, (state,action)=>{

            state.reviews=  action.payload;
                
            state.loadingReview =false;
        });

        builder.addCase(fetchReviews.rejected, (state)=>{
            state.loadingReview =false;
            state.reviews = []
        });


        builder.addCase(fetchFAQ.pending, (state)=>{
            state.loadingFaq =true;
        });

        builder.addCase(fetchFAQ.fulfilled, (state,action)=>{

            state.faqArray=  action.payload;
                
            state.loadingFaq =false;
        });

        builder.addCase(fetchFAQ.rejected, (state)=>{
            state.loadingFaq =false;
            state.faqArray = []
        });


        builder.addCase(fetchTeam.pending, (state)=>{
            state.loadingTeam =true;
        });

        builder.addCase(fetchTeam.fulfilled, (state,action)=>{

            state.team=  action.payload;
                
            state.loadingTeam =false;
        });

        builder.addCase(fetchTeam.rejected, (state)=>{
            state.loadingTeam =false;
            state.team = []
        });

        builder.addCase(postContact.pending, (state)=>{
            state.loadingConstact =true;
        });

        builder.addCase(postContact.fulfilled, (state,action)=>{

            state.post=  action.payload;
                
            state.loadingConstact =false;
        });

        builder.addCase(postContact.rejected, (state)=>{
            state.loadingConstact =false;
            state.post = {}
        });


    }



});

// export const {storeImages} = mainSlice.actions;

export default mainSlice.reducer;