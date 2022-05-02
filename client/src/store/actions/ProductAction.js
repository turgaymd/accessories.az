import {
    Pro_req,
    Pro_success,
    Pro_fail,
    Pro_det_req,
    Pro_det_fail,
    Pro_det_success
}
from "../constants/Productsconstant"
import axios from "axios";
export const showProducts=(keyword=" ")=>async(dispatch)=>{
    try{
        dispatch({type:Pro_req})
        const{data}=await axios.get(`/api/products?keyword=${keyword}`)
        dispatch({type:Pro_success,payload:data});
    }
    catch(error){
        dispatch({
            type:Pro_fail,
            payload:
            error.response && error.response.data.message ? error.response.data.message
            : error.message,
        });

    }
};
export const showProductss=()=>async(dispatch)=>{
    try{
        dispatch({type:Pro_req})
        const{data}=await axios.get("/api/shop")
        dispatch({type:Pro_success,payload:data});
    }
    catch(error){
        dispatch({
            type:Pro_fail,
            payload:
            error.response && error.response.datas.message ? error.response.datas.message
            : error.message,
        });

    }
};
export const showDetails=(id)=>async(dispatch)=>{
    try{
        dispatch({type:Pro_det_req})
        const{data}=await axios.get(`/api/products/${id}`);
        dispatch({type:Pro_det_success,payload:data});
    }
    catch(error){
        dispatch({
            type:Pro_det_fail,
            payload:
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        });

    }
}
export const showDetailss=(id)=>async(dispatch)=>{
    try{
        dispatch({type:Pro_det_req})
        const{data}=await axios.get(`/api/shop/${id}`);
        dispatch({type:Pro_det_success,payload:data});
    }
    catch(error){
        dispatch({
            type:Pro_det_fail,
            payload:
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        });

    }
}
// export const showProductss=()=>async(dispatch)=>{
//     try{
//         dispatch({type:Pro_req})
//         const{data}=await axios.get("/api/products")
//         dispatch({type:Pro_success,payload:data});
//     }
//     catch(error){
//         dispatch({
//             type:Pro_fail,
//             payload:
//             error.response && error.response.data.message ? error.response.data.message
//             : error.message,
//         });

//     }
// };
//  productRouter.get(
//     "/",
//     asyncHandler(async (req,res)=>{
//         const products=await Product.find({})
//         res.json(products)
//     })
// )