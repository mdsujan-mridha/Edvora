import { useEffect, useState } from "react"

const UseOrder = () =>{
    const[order,setOrder] = useState([]);
     useEffect( ()=>{
        fetch('https://assessment.api.vweb.app/orders')
      .then(res =>res.json())
       .then(data => setOrder(data))
     } ,[])
     return [order,setOrder];
        
}
export default UseOrder;