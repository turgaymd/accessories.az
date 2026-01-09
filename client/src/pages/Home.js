import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { GrLinkNext } from "react-icons/gr";
import { useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showProducts } from "../store/actions/ProductAction";

import { APiContext } from "../ApiContext";

const Home = ({ match }) => {
  // const slides = [
  //   {
  //     title: " Luxury accessories",
  //     image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop",
  //   },
  //   {
  //     title: "Elegant Watches",
  //     image: "home4.webp",
  //   },

  //   {
  //     title: "Luxury handbags",
  //     image: "home1.webp",
  //   },
  // ];

  const { apiUrl } = useContext(APiContext);
  const keyword = match.params.keyword;
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { products } = productList;

  useEffect(() => {
    dispatch(showProducts(keyword, apiUrl));
  }, [dispatch, keyword, apiUrl]);
  return (
    <>
      <div className="home">   
                  <div className="slide-text" style={{backgroundImage:`url(https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop)`}}>
                    <div className="p-3" >
                      <h2>Timeless elegance</h2>
                      <div className=" pb-4 discover">
                        <Link to={`/accessories/`} className="btn">
                          Shop now 
                        </Link>
                      </div>
                    </div>
                </div>
      </div>
      <div className="mb-3 pt-5">
        <h2 className="best_sellers text-center mt-4">Featured Products</h2>
      </div>
      <div className="container bestt">
        <div className="row products">
          {products?.slice(-3).map((product) => {
            return (
              <div className="col-lg-3 col-12 product" key={product._id}>
                <div className="position-relative">
                  <img src={`${product.mainImage}`} className="card-img"  alt={product.name}/>
                  <div className="hidden">
                    <Link to={`/products/${product._id}`}>
                      {" "}
                      <button className="btn btn-white">
                        <GrLinkNext fontSize={24} />
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="product-bottom">
                  <div className="product-title text-truncate">
                    <a>{product.name}</a>
                  </div>
                  <div className="product-prize">${product.price}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <section className="banner3 mt-4 pt-4">
        <div className="banner-content text-center justify-content-center">
          <h3 className="high-title">HIGH QUALITY SINCE 2020</h3>
          <p className="banner3_p">
            Everything you need to complete the perfect collection
          </p>
          <div className="text-center">
            <p className="banner-txt text-center mb-2 mb-lg-3">
              {" "}
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
              odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
              turpis.{" "}
            </p>
            {/* Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis
facilisis fermentum. Aliquam porttitor mauris sit amet orci. */}
            <Link to="/about">
              <button className="seeProducts_button mb-3">See more</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
