'use client';

import { useState, useEffect } from 'react';
import { getAuth, signInWithPopup } from 'firebase/auth';
import { googleProvider } from '../lib/firebase'; // Assuming googleProvider is correctly initialized

const GoogleLoginButton = () => {
  const [user, setUser] = useState(null);

  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = getAuth().onAuthStateChanged(setUser);
    return () => unsubscribe();
  }, []);

  // Handle Google sign-in
  const handleGoogleSignIn = async () => {
    try {
      const auth = getAuth(); // Get the auth instance
      const result = await signInWithPopup(auth, googleProvider); // Use signInWithPopup
      const user = result.user; // Get the signed-in user's information
      console.log('User logged in:', user);
    } catch (error) {
      console.error('Error during Google sign-in:', error);
    }
  };

  // Handle sign-out
  const handleSignOut = async () => {
    const auth = getAuth();
    await auth.signOut();
  };

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.displayName}</p>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <button onClick={handleGoogleSignIn}>Sign in with Google</button>
      )}
    </div>
  );
};

export default GoogleLoginButton;
