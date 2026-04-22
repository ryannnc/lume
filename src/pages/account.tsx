import { auth } from "../firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail
} from "firebase/auth";
import { useEffect, useState } from "react";
import "./account.css";
import { FcGoogle } from "react-icons/fc";

export default function Account() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLogin, setIsLogin] = useState(true);
    const [error, setError] = useState("");
    const provider = new GoogleAuthProvider();
    const [cooldown , setCooldown] = useState(0);

    async function handleSubmit() {
        setError("");
        try {
            if (isLogin) {
                await signInWithEmailAndPassword(auth, email, password);
            } else {
                await createUserWithEmailAndPassword(auth, email, password);
            }
        } catch (err: any) {
            setError(err.message);
        }
    }

    async function handleGoogleSignIn() {
        setError("");

        try {
            await signInWithPopup(auth, provider);
        } catch (err: any) {
            setError(err.message);
        }
    }

    async function handleForgetPassword(){
        if (cooldown > 0) return;
        if (!email) {
            setError("Please Enter Your Email First");
            return;
        }
        try{
            await sendPasswordResetEmail(auth, email);
            setError("Password reset email sent")
            setCooldown(30);
        } catch (err : any){
            setError(err.message);
        }
    }

    return (
        <div className="account-page">
            <h1 className="account-title">{isLogin ? "Log In" : "Sign Up"}</h1>

            <form className="account-form" onSubmit={handleSubmit}>
                <div className="input-group">
                    <label>Email</label>
                    <input
                        className="account-input"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <div className="input-row">
                    <label>Password</label> 
                    <span className = "forgot-password" onClick={handleForgetPassword}>
                        Forgot Password?
                    </span>
                    </div>
                    <input
                        className="account-input"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button className="account-submit" type="submit">
                    {isLogin ? "Log In" : "Sign Up"}
                </button>
            </form>

        
            <div className="account-toggle">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <span className = "account-link"
                onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? "Sign Up" : "Log In"}
                </span>
            </div>
            <FcGoogle className = 'google-button' onClick={handleGoogleSignIn}/>

            {error && <p className="account-error">{error}</p>}
        </div>
    );
}