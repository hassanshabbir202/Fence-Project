import React, { useEffect, useRef, useState } from "react";
import "./LoginScreen.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import WarningModal from "../../components/WarningModal";
import HelpCenter from "../../components/HelpCenter";
import{useSelector} from "react-redux"

const LoginScreen = () => {

    const [personalandBusiness, setPersonalandBusiness] = useState(true);
    const [shoModal, setshoModal] = useState(false);
    const [ModalHeading, setModalHeading] = useState("");
    const [ModalContnt, setModalContnt] = useState("");    
    const isSummary  = useSelector((state)=>state.RoutesChecking.isSummary);
    
    

    const handleBusiness = () => {
      setPersonalandBusiness(false);
    };

  const personalSelect = () => {
    setPersonalandBusiness(true);
  };

  const navigate = useNavigate();

  const [signUpState, setSignUpState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  

  const [signInState, setSignInState] = useState({
    email: "",
    password: "",
  });

  const [signInError, setSignInError] = useState("");
  const [signUpError, setSignUpError] = useState("");

  let name, value;

  const handleChange = (event) => {
    name = event.target.name;
    value = event.target.value;
    setSignUpState({ ...signUpState, [name]: value });
  };

  const handleSignInChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setSignInState({ ...signInState, [name]: value });
  };

  const handleSignIn = async () => {

    const { email, password } = signInState;

    if (!email || !password) {
      setSignInError("Please fill in all the required fields");
    } else if (!isEmailValid(email)) {
      setSignInError("Please enter a valid email address");
    
    } else {
        const response = await fetch("https://comfortable-tan-wig.cyclic.app/auth/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email,
              password,
            }),
          });
          
          const data = await response.json();
          if (data.status === "ok") {
            window.localStorage.setItem("token" , data.data)
            window.localStorage.setItem("loggedIn" , true)
            isSummary ? navigate("/gotoCart ") : navigate("/stores ")
          } else {
            
            setshoModal(true)
            setModalHeading("signIn failure")
            setModalContnt("user not found ! ")
            const errorData = await res.json();
            console.error(errorData.message); // Log the error message from the server
            // You can display an error message to the user or handle the error as needed.
          }
    }
  };


  const userSignUp = async () => {

    const { firstname, lastname, email, password } = signUpState;

    if (!firstname || !lastname || !email || !password) {

      setSignUpError("Please fill in all the required fields");
    
    } else if (!isEmailValid(email)) {
    
      setSignUpError("Please enter a valid email address");
    
    }  else {
    
      const res = await fetch("https://comfortable-tan-wig.cyclic.app/auth/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              firstname,
              lastname,
              email,
              password,
            }),
          });
          
          const data = await res.json();

          if (data) {
    

            if(data.error === "User already exists"){

              setshoModal(true)
              setModalHeading("signup failure")
              setModalContnt("change Email Address this email already Exsist ! ")

            }else{
              setshoModal(true)
              setModalHeading("signup sucess")
              setModalContnt("you are signed up successfully ")
              setToggle(false);
            }

          }else{
    
            setshoModal(true)
            setModalHeading("signup failure")
            setModalContnt("you are not signed up please try latter ! ")
            const errorData = await res.json();
            console.error(errorData.message);
          }
          
    }
  };


  const isEmailValid = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const [toggle, setToggle] = useState(true);

  const goToSignIn = () => {
    setToggle(false);
  };

  const createAnAccount = () => {
    setToggle(true);
  };



  return (
    <>
    <Navbar/>
     <div className="auth pt-20">

      <div className="createaccountcontainer">
        <div className="twomaindivsincreateaccount">
          <div className="firstcreateaccount">
            <div className="accountbox">
              <div className="acconthead">
                <button className="signinbtn" onClick={goToSignIn}>
                  Sign In
                </button>
                <button className="createaccounmtbtn" onClick={createAnAccount}>
                  Create Account
                </button>
              </div>
              {toggle ?   <div>
                         <p className="MENARDS_Text">Create a MENARDS.COM® Account</p>
                 <p className="requiredfield">* Required Fields</p>

                <div className="accounttype">
                     <p className="accountypeheading">* Account Type</p>
                     <input
                       type="radio"
                       name="account"
                       value="Personal"
                      className="aaccountinputs"
                       checked={personalandBusiness}
                       onChange={personalSelect}
                     />
                    <span className="personal">Personal</span>
                     <input
                       type="radio"
                       name="account"
                       value="Business"
                       className="aaccountinputs aaccountinputtwo"
                       checked={!personalandBusiness}
                       onChange={handleBusiness}
                     />
                     <span className="business">Business</span>
                   </div>
               <div className="personalaccountform">
                      <div className="firsttwoinputs">
                        <div className="firstinput">
                          <label htmlFor="firstname" className="firstnamelabel">
                            First Name
                          </label>
                          <input
                            type="text"
                            name="firstname"
                            id=""
                            className="firstnamei"
                            value={signUpState.firstname}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="secondinput">
                          <label htmlFor="lastname" className="lastnamelabel">
                            Last Name
                          </label>
                          <input
                            type="text"
                            name="lastname"
                            id=""
                            className="lastnamei"
                            value={signUpState.lastname}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="thirdinputs">
                        <label htmlFor="Email Adress" className="emaillabel">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={signUpState.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="fourthinput">
                        <label htmlFor="password" className="passwordlabel">
                          Create a Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          value={signUpState.password}
                          onChange={handleChange}
                        />
                        {signUpError && (
                          <p className="error-messagesignup">{signUpError}</p>
                        )}
                      </div>
                      <div className="createaccountbutton">
                        <button onClick={userSignUp}>Create Account</button>
                      </div>
                    </div>
              </div>
                    
                    :      <div className="signinaccountcontainer">
                  <div className="signinaccount">
                    <p className="signinaccountfirstheading">
                      Sign In To Your Account
                    </p>
                    <p className="pleasesignIn">
                      Please sign in with your MENARDS.COM® account or create an
                      account to continue.
                    </p>
                    <p className="requiredfield">* Required Fields</p>
                    <div className="thirdinputs">
                      <label htmlFor="email" className="emaillabel">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={signInState.email}
                        onChange={handleSignInChange}
                      />
                    </div>
                    <div className="fourthinput">
                      <label htmlFor="password" className="passwordlabel">
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        value={signInState.password}
                        onChange={handleSignInChange}
                      />
                    </div>
                    {signInError && (
                      <p className="error-message">{signInError}</p>
                    )}
                    <div className="sign-in-account-btn">
                      <button onClick={handleSignIn}>Sign In</button>
                    </div>
                  </div>
                </div>}
            </div>
          </div>

          <div className="secondcreateaccount">
            <div className="firstpersonalized">
              {/* <PersonIcon sx={{ fontSize: "50px" }} /> */}
              <div className="firstpersonalizedinner">
                <h2>Personalized</h2>
                <p>
                  View your order history, track orders, and create wish lists
                  at any time.
                </p>
              </div>
            </div>

            <div className="secondsecure">
              {/* <HttpsIcon sx={{ fontSize: "50px" }} /> */}
              <div className="secondsecureinner">
                <h2>Secure</h2>
                <p>
                  We use the highest encryption level currently available so you
                  can feel safe and secure when placing your orders online.
                </p>
              </div>
            </div>
            <div className="thirdConvenient">
              {/* <SecurityUpdateWarningIcon sx={{ fontSize: "50px" }} /> */}
              <div className="thirdConvenientinner">
                <h2>Convenient</h2>
                <p>
                  Use your MENARDS.COM® account in-store, at home, and on the go
                  with the Menards app for orders, estimates, and designs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
          <HelpCenter/>
     </div>
     <WarningModal setIsOpen={setshoModal} isOpen={shoModal} heading={ModalHeading} content={ModalContnt} />
    </>
  );
};

export default LoginScreen;