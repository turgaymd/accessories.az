import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../Components/LoadingError/Loading";
import Message from "../Components/LoadingError/error";
import { login } from "../store/actions/UserAction";
import { useContext } from "react";
import { APiContext } from "../ApiContext";
const Login = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const redirect = location.search ? location.search.split("=")[1] : "/";
  const userLogin = useSelector((state) => state.userLogin);
  const { apiUrl } = useContext(APiContext);
  const { error, loading, userInfo } = userLogin;
  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [userInfo, history, redirect]);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password, apiUrl));
  };
  return (
    <>
      <div className="container d-flex flex-column justify-content-center align-items-center mt-5 mb-5">
        {error && <Message variant="alert-danger">{error}</Message>}
        {loading && <Loading />}
        <div className="card">
        <form className="auth  text-center" onSubmit={submitHandler}>
          <h2 className="text-center ">Sign in</h2>
          <p className="">Sign in to buy accessories</p>
          <input type="email" placeholder="Email*" value={email} name="email" onChange={(e) => setEmail(e.target.value)} required></input>
          <input type="password" placeholder="Password*" value={password} name="password" onChange={(e) => setPassword(e.target.value)} required></input>
          <div className="pb-2">
            <button type="submit" className="w-100 btn btn-dark">
              Login
            </button>
          </div>
          <Link to={redirect ? `/register?redirect=${redirect}` : "/register"}>
            Create an account
          </Link>
        </form>
      </div>
      </div>
    </>
  );
};
export default Login;
