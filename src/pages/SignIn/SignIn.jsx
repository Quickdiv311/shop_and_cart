import { useContext } from "react";
import Header from "../../components/shared/Header/Header";
import './SignIn.css';
import AppContext from "../../context";
import { useNavigate } from "react-router-dom";

function SignIn(){
   
    const navigate = useNavigate();
    const {dispatcherEvents} = useContext(AppContext);

    function handleSignIn()
    {
       dispatcherEvents("UPDATE_LOGGED", true);
       navigate('/');
    }

    return(
        <div className="sign-in-wrapper">
            <div className="sign-in-container">
                <h3 style={{color: 'white'}}>Please Login First !!!</h3>
                <hr style={{color: 'white'}}/>
                <form action="">
                <input type="text" className="form-control mb-3" placeholder="User Name"/>

                <input type="text" className="form-control mb-3" placeholder="Password"/>
                <div className="btn-container">
                <button className="btn btn-success sign-button" onClick={handleSignIn}>Sign In</button>
                </div>

                <div className="signup-link">
                    <span className="signup-link-text">Don't have an account? </span>
                    <a href="/signup" style={{textDecoration: 'none', fontWeight: 'bolder'}}>SignUp</a>
                </div>

                </form>
                <div className="signin-btn-pair">
                <button className="btn btn-primary facebook-btn">
              <img src="https://i.pinimg.com/564x/d2/17/4b/d2174bdef984e49aafabeb437744ca7a.jpg" className=" facebook-img"/>
              Sign In With Facebook</button>
  
             
              <button className="btn google-btn">
                  <img src=" https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" className=" google-img"/>
                  <b>Sign In With Google</b></button>
                  </div>
            </div>
        </div>
    );
}

export default SignIn;