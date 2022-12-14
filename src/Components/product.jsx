import { useParams } from "react-router"


function Product(){
   const {para}=useParams()
  
    return(
        <div>
            {para}
        </div>
    )

}
export default Product