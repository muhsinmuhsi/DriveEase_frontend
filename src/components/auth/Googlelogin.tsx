import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import api from "../../api";

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

     useGoogleLogin({
        onSuccess: (codeResponse: User) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error),
    });

    const hundleloginsuccess= async(credentialresponse:CredentialResponse)=>{
      const {credential}=credentialresponse
    
      try {
        const response=await api.post('/googleauth',{idtoken:credential},{
            headers:{
                "Content-Type": "application/json", 
            }
        })
        
        navigate('/')
        
        toast.success(`${response.data.message}`||"registered successfully")
        localStorage.setItem('user',JSON.stringify(response.data.data.user))

        console.log('this is user from ',response.data.data.user);
        
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
            .get<Profile>(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                    headers: {
                        Authorization: `Bearer ${user.access_token}`,
                        Accept: 'application/json',
                    },
                })
                .then((res) => {
                    setProfile(res.data);
                })
                .catch((err:unknown) => console.log(err));
        }
    }, [user]);

    const logOut = () => {
        googleLogout();
        setProfile(null);
        
    };

    return (
        <div>
            <div>
                <Toaster/>
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