import  {createContext, useState}  from "react";

export const MyContext = createContext() 
const MyContextProvider = (props)=>{
    const [wishList, setWishList] = useState([])
   
const ContextValues ={
    wishList,setWishList
}  
return(
    <MyContext.Provider value={ContextValues}>
        {props.children}
    </MyContext.Provider>
)  
}
export default MyContextProvider;


