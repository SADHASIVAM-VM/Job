import React, { useContext } from 'react'
import { MyContext } from '../Contexts/Context'
import { FaCircleXmark } from 'react-icons/fa6'

const Wishlist = () => {

    const {wishList,setWishList}= useContext(MyContext)
    console.log(wishList.length)
    const del =(e)=>{
      const upDateWishList = wishList.filter(item => item.id !== e);
      setWishList(upDateWishList)
    }
    var indexs = 0;
    const colors = ['bg-blue-200', 'bg-green-200', 'bg-yellow-200', 'bg-red-200', 'bg-purple-200'];
    const color = colors[indexs % colors.length];
    return (
        <div className='md:mx-20'>
          <h1 className='text-4xl font-bold text-center my-5'>Wishlist</h1>
          {
            wishList.length === 0? (<h1 className='text-center text-red-400 text-4xl flex items-center justify-center h-[500px]'>No Fav Jobs</h1>)
            :(<ul className='mb-3'>
            {wishList.map((item,index )=> {
              indexs = index
            return(
              <li key={item.id} className={`mb-3 p-3 ${color} grid grid-cols-3 place-items-center place-content-center text-start`}>
                <p className='p-2 '>{item.names}</p>
                <p className='text-start bg-white rounded-lg px-3 text-xs'>{item.type}</p>
                <button onClick={()=> del(item.id)}><FaCircleXmark color='red'/></button>
               
              </li>
            
            )})}
          </ul>)
          }
        
        </div>
      );
}

export default Wishlist
