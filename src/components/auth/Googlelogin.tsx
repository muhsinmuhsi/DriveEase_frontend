import { GoogleLogin } from "@react-oauth/google";
import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface User {
    access_token: string;
}

interface Profile {
    picture: string;
    name: string;
    email: string;
}

const Googlelogin: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const [profile, setProfile] = useState<Profile | null>(null);
    const navigate=useNavigate()

    const login = useGoogleLogin({
        onSuccess: (codeResponse: User) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error),
    });

    const hundleloginsuccess= async(credentialresponse:any)=>{
      const {credential}=credentialresponse
      console.log(credential,'iam')
      try {
        const response=await axios.post('http://localhost:8080/api/users/googleauth',{idtoken:credential},{
            headers:{
                "Content-Type": "application/json", 
            }
        })
        toast.success(`${response.data.message}`||"registered successfully")
        navigate('/')
      } catch (error) {
        console.log(error,'error');
        toast.error(`something went wrong`) 
      }
      
    }

    const handlegooglelogin=()=>{
      console.log("authantication failed");
    }

    useEffect(() => {
        if (user) {
            axios
                .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                    headers: {
                        Authorization: `Bearer ${user.access_token}`,
                        Accept: 'application/json',
                    },
                })
                .then((res) => {
                    setProfile(res.data);
                })
                .catch((err) => console.log(err));
        }
    }, [user]);

    const logOut = () => {
        googleLogout();
        setProfile(null);
    };

    return (
        <div>
            <div>
                <h1 className="text-2xl font-bold text-center pb-4">sign up with google </h1>
            </div>
            {profile ? (
                <div>
                    <img src={profile.picture} alt="user image" />
                    <h3>User Logged in</h3>
                    <p>Name: {profile.name}</p>
                    <p>Email Address: {profile.email}</p>
                    <br />
                    <br />
                    <button onClick={logOut}>Log out</button>
                </div>
            ) : (
              <>
              <GoogleLogin  onSuccess={hundleloginsuccess} onError={handlegooglelogin}></GoogleLogin>
              </>
                
               
            )}
        </div>
    );
};

export default Googlelogin ;
















// import { useGoogleLogin } from "@react-oauth/google";
// import React from "react";

// interface User {
//   name: string;
//   email: string;
//   [key: string]: unknown | string;
// }

// interface GoogleLoginButtonProps {
//   setUser: React.Dispatch<React.SetStateAction<User | null>>;
// }

// const GoogleLogin: React.FC<GoogleLoginButtonProps> = ({ setUser }) => {
//   const handleSuccess = async (authResult: { code?: string }) => {
//     try {
//       if (authResult.code) {
//         console.log("Auth code:", authResult.code);

//         const response = await fetch("http://localhost:8080/api/users/googleauth", {
//           method: "POST", // Use POST instead of GET for sending the body
//           body: JSON.stringify({ code: authResult.code }),
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });

//         const result = await response.json();

//         console.log("API Response:", result);

//         if (result.user) {
//           setUser(result.user); // Ensure 'result.user' matches the 'User' interface
//           alert("Successfully logged in");
//         } else {
//           throw new Error("User data is missing in the API response");
//         }
//       } else {
//         throw new Error("Authentication failed: Code not received");
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//     }
//   };

//   const handleError = (errorResponse: {
//     error?: string;
//     error_description?: string;
//     error_uri?: string;
//   }) => {
//     console.error("Google Login Error:", errorResponse);
//     alert("An error occurred during Google login. Please try again.");
//   };

//   const googleLogin = useGoogleLogin({
//     onSuccess: handleSuccess,
//     onError: handleError,
//     flow: "auth-code",
//     scope: "openid email profile",
//   });

//   return (
//     <button
//       style={{
//         padding: "10px 20px",
//       }}
//       onClick={googleLogin}
//     >
//       Sign in with Google
//     </button>
//   );
// };

// export default GoogleLogin;
