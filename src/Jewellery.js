import React  from 'react'
import Home from './Home';
import {useSelector} from 'react-redux'

function Jewellery(){
  const {jewellery}=useSelector(state=>state.ProductsReducer)
return(
  <>
    <div className='desc'>
      <h2>Jewellery</h2>
      <p>Define your outfits with on-trend women's jewellery from Accessorize.</p>
      </div>
      <div className='card'>
        <section className='py-4 container'>
          <div className='row justify-content-center'>
      {jewellery.map(product=>{
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
export default Jewellery;