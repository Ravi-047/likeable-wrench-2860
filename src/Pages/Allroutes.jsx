import { Category } from "../Components/Category"
import {Routes,Route} from "react-router-dom"
import Product from "../Components/product"


function Allroutes(){

return (
   <>
     <Routes>
     {/* <Route path="/:para" element={<Home/>}/> */}
     <Route path="/:para" element={<Category/>}/>
     <Route path="/:para/:para" element={<Product/>}/>
     </Routes>
   
   </>

)

}
export default Allroutes