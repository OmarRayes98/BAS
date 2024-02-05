import { createAsyncThunk} from '@reduxjs/toolkit';
import { axiosPublic } from '../../utils/api/axios';

export const fetchServices = createAsyncThunk("main/fetchServices", async() =>{


        const res = await axiosPublic(`/api/home/services`,{
            method:"Get",
        });

        const data= res.data.data;


        return data;

});

export const fetchReviews = createAsyncThunk("main/fetchReviews", async() =>{


    const res = await axiosPublic(`/api/home/review`,{
        method:"Get",
    });

    const data= res.data.data;


    return data;

});

export const fetchFAQ = createAsyncThunk("main/fetchFAQ", async() =>{

    const res = await axiosPublic(`/api/home/questions`,{
        method:"Get",
    });

    const data= res.data.data;


    return data;

});

export const fetchTeam = createAsyncThunk("main/fetchTeam", async() =>{

    const res = await axiosPublic(`/api/home/members`,{
        method:"Get",
    });

    const data= res.data.data;


    return data;

});



export const postContact = createAsyncThunk("main/postContact" , async(paramsObject)=>{

        const res = await axiosPublic.post(`Fee_calculator/multi_calculate/`,paramsObject);

        const data= res.data;

        return data;

    
  
    
})