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
        <div className="row">
          {products?.filter((product) => product.isFeatured).map((product) => {
            return (
              <div className="col-md-3 col-12" key={product._id}>
                <div className="product">
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
              </div>
            );
          })}
        </div>
      </div>
      <section className="banner3 mt-4 pt-4 text-center">
        <div className="mx-auto container-sm">
          <h3 className="high-title">Designed for the Modern Muse</h3>
            <p className="text-muted fw-light mb-4 mx-auto  fs-5">
              {" "}
             We believe that true luxury lies in the details. Each piece in our collection is thoughtfully designed and meticulously crafted to accompany you through life's most memorable moments.{" "}
            </p>
            <Link to="/about">
              <button className="btn btn-outline-dark mb-3  more-btn">Discover more</button>
            </Link>
          </div>
      </section>
    </>
  );
};
export default Home;
