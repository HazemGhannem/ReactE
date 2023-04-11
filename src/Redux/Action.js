import { TEST_LIST_FAIL, TEST_LIST_REQUEST, TEST_LIST_SUCCES } from "./Constant"
import Product  from '../Product'

export const getAll = (name) => async(dispatch,getState)=> {
    try {
        dispatch ({type:TEST_LIST_REQUEST,
        })

        const config ={
            headers:{ 
                'Content-Type':'application/json',
            }
        }
        // var data;
        // console.log(Product.length)
        // Product.map((p)=>{
        //     if (p.name===name) {
        //         data = p  
        //     }else
        //     data="notFound"   
        // })
        // const { data }  =await axios.post(`/api/profile`,user,config)
        const data=Product
        dispatch ({
            type: TEST_LIST_SUCCES,
            payload: data,
        })
      
    } catch (error) {
        dispatch({
            type:TEST_LIST_FAIL,
            payload: error.response && error.response.data.message 
            ?error.response.data.message  
            :error.message,
        })
        
    }

}


export const addtest = (test) => async(dispatch,getState)=> {
    try {
        dispatch ({type:TEST_LIST_REQUEST,
        })

        const config ={
            headers:{ 
                'Content-Type':'application/json',
            }
        }
        Product.Product.push(test)
        const data = Product
        // const { data }  =await axios.post(`/api/profile`,user,config)
        
        dispatch ({
            type: TEST_LIST_SUCCES,
            payload: data,
        })
      
    } catch (error) {
        dispatch({
            type:TEST_LIST_FAIL,
            payload: error.response && error.response.data.message 
            ?error.response.data.message  
            :error.message,
        })
        
    }

}
