import React  from 'react'
import { Link } from 'react-router-dom';
import Home from './Home';
import {useSelector} from 'react-redux'
function Holiday_shop(){
  const{holiday}=useSelector(state=>state.ProductsReducer)
return(
  <>
    {/* <div className='desc'> */}
      <h2>Holiday Shop</h2>
      {/* <p>Leather bags there's something for everyone. Meet the perfect plus one to your next event<br/> with our Clutch bags.</p> */}
    {/* </div> */}
    <div className='card'>
        <section className='py-4 container'>
          <div className='row justify-content-center'>
      {holiday.map(product=>{
        return (
          <>
<div className='col-md-3 yess' key={product.id}>
  <img src={`${product.image}`} className="card-img img-fluid"></img>
  <div className='hidden  justify-content-center'>
    <button className='btn btn-success text-center'>Add to Cart</button>
  </div>
  <div className='product-title text-center'>
    {product.name}
  </div>
  <div className='product-prize text-center'>
    ${product.price}
  </div>
</div>
</>
          )
        })}
        </div>
          </section>
           </div>
           <Home/>
           </>
)
}
export default Holiday_shop;