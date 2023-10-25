
import { useDispatch } from 'react-redux';
import './SignUp.css';
import { update, updateName, updateSign } from '../../store/Reducers/loginReducer';
import {auth} from '../../firebase';
import {GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword} from 'firebase/auth';
import {updateProfile} from 'firebase/auth';

function SignUp(){
   
    const dispatch = useDispatch();
    const provider = new GoogleAuthProvider();

    function handleGoogle()
    {
    signInWithPopup(auth,provider)
   .then((result) => {
     dispatch(update(!!auth.currentUser));
     console.log(result);
   })
   .catch((error) => {
    console.log(error);
   })
    }

    function handleSubmit(e){
      e.preventDefault();
      const dName = e.target[0].value;
      const email = e.target[1].value;
      const password = e.target[2].value;
      createUserWithEmailAndPassword(auth,email,password)
      .then(res => {
      dispatch(update(!!auth.currentUser));
      updateProfile(auth.currentUser,{displayName: dName});
        console.log(res);
         })
      .catch(e => console.log(e));
    }

    return(
        <div className="sign-up-wrapper">
            <div className="sign-up-container">
                <h3 style={{color: 'white'}}>Create an Account !!!</h3>
                <hr style={{color: 'white'}}/>
                <form onSubmit={(e) => handleSubmit(e)}>
                   
                <input type="text" className="form-control mb-3" placeholder="Display Name"/>
                <input type="email" className="form-control mb-3" placeholder="User Email"/>
                
                <input type="password" className="form-control mb-3" placeholder="Password"/>
                <input type="password" className="form-control mb-3" placeholder="ConfirmPassword"/>

                <div className="btn-container">
                <button type="submit" className="btn btn-success sign-button">Sign Up</button>
                </div>

                </form>
                
                <div className="signup-link">
                    <span className="signup-link-text">Already have an account? </span>
                    <a onClick={() => dispatch(updateSign(true))} style={{textDecoration: 'none', fontWeight: 'bolder',cursor: 'pointer'}}>SignIn</a>
                </div>

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

export default SignUp;