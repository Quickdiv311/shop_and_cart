
import { useDispatch } from 'react-redux';
import './SignIn.css';
import { update, updateSign } from '../../store/Reducers/loginReducer';
import {auth} from '../../firebase';
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth';

function SignIn(){
   
    const dispatch = useDispatch();
    const provider = new GoogleAuthProvider();

    function handleSignIn()
    {
       dispatch(update(true));
    }

    function handleGoogle()
    {
    signInWithPopup(auth,provider)
   .then((result) => {
     dispatch(update(result.user.emailVerified));
     console.log(result);
   })
   .catch((error) => {
    console.log(error);
   })
    }

    return(
        <div className="sign-in-wrapper">
            <div className="sign-in-container">
                <h3 style={{color: 'white'}}>Please Login First !!!</h3>
                <hr style={{color: 'white'}}/>
                <form action="">
                
                
                <input type="email" className="form-control mb-3" placeholder="User Email"/>
                
                <input type="password" className="form-control mb-3" placeholder="Password"/>

                <div className="btn-container">
                <button className="btn btn-success sign-button" onClick={handleSignIn}>Sign In</button>
                </div>

                <div className="signup-link">
                    <span className="signup-link-text">Don't have an account? </span>
                    <span onClick={() => dispatch(updateSign(false))} style={{textDecoration: 'none', fontWeight: 'bolder', cursor: 'pointer'}}>SignUp</span>
                </div>

                </form>

                <hr style={{color: 'white'}}/>
                <div className="signin-btn-pair">
                <button className="btn btn-primary facebook-btn">
              <img src="https://i.pinimg.com/564x/d2/17/4b/d2174bdef984e49aafabeb437744ca7a.jpg" className=" facebook-img"/>
              Sign In With Facebook</button>
  
             
              <button className="btn google-btn" onClick={handleGoogle}>
                  <img src=" https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" className=" google-img"/>
                  <b>Sign In With Google</b></button>
                  </div>
            </div>
        </div>
    );
}

export default SignIn;