import { useSelect } from "@mui/base";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./Carts.css"
// const ShowCard = (props) => {
//   console.log("Here", props.userData);
//   return (
//     <>
//       {props.userData.map((user) => {
//         return (
//           //   <div className=" col-lg-3 col-md-4 col-sm-6 " style={{width:"18rem"}}>
//           <div className=" col-lg-3 col-md-4 col-sm-6  my-3">
//             <div className="card">
//               <div className="card-body">
//                 <div className="card-title">
//                   <h3>{user.title}</h3>
//                 </div>
//                 <div className="card-text">{user.body}</div>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </>
//   );
// };

export default function Cards(props) {
  const [totalPrice, setTotalPrice] = useState("") 
  const [noItem, setNoItem] = useState(0) 
  const cartItem = useSelector((state)=> state.addedItem)
  let price = useSelector((state)=> state.getPrice)
  let no_of_item = useSelector((state)=> state.no_of_item)
  let s = 0;
  let count = 0;


  useEffect(()=> {
    cartItem.reverse()
  },[])

  console.log("New", cartItem.reverse())
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="#">WishList</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
           
          </div>
        </div>
      </nav>

      <div className="my-3" style={{textAlign:"center"}}>
          <span style={{color:"grey"}} >Total Number of Items - {no_of_item}  |  Total Price - {price}</span>
      </div>

      <div className="container">
      {/* {cartItem.reverse()} */}
       <div className="container col-8" >
          {
            
            cartItem.map((item)=> {
              {s +=  item.price}
              {count += 1}
              return (
                <>
                  {/* {setTotalPrice(s)} */}
                  <div className="boxCart my-4">
                    <img className="mx-4" src={item.image} alt="error" height="100px" width="100px"/>
                    <div style={{width: "100%"}}>

                    <div className="block">
                      <b>About Product - </b>
                      {item.title}  
                    </div>
                    <div className="block">
                      <b>Price - </b>
                      {item.price}  
                    </div>
                    
                    <div className="block">
                      <button className="btn btn-success mx-5" >Add More</button>  
                      <button className="btn btn-danger mx-5 " >Remove</button>  
                    </div>

                    </div>
                  </div>
                  
                </>
              )
                
            }
            
            )
          } 
        </div>
      </div>
    </>
  );
}