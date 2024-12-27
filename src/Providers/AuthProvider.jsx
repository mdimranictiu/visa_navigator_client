import { createUserWithEmailAndPassword,GoogleAuthProvider,onAuthStateChanged,signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { Children, createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';

export const AuthContext= createContext(null);

const googleProvider= new GoogleAuthProvider;

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true)
    
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signOutUser=()=>{
        setLoading(true)
        return signOut(auth);
    }
    const signInwithGoogle=()=>{
        return signInWithPopup(auth,googleProvider)
    }

    useEffect(()=>{
       const unSubscribe= onAuthStateChanged(auth,currentUser=>{
            console.log('Current User', currentUser);
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>{ 
            unSubscribe()
        }
    },[]) 

    // onAuthStateChanged(auth, currentUser => {
    //     if(currentUser){
    //         console.log('Current User', currentUser);
    //         setUser(currentUser)
    //     }
    //     else{
    //         console.log('No user logged in');
    //         setUser(null)
    //     }
    // })
    
    
    const userInfo={
      user,loading,createUser,signInUser,signOutUser,signInwithGoogle
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;