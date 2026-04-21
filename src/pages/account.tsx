import { auth } from "../firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import { useState } from "react";
import type { FormEvent } from "react";
import "./account.css";

export default function Account() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLogin, setIsLogin] = useState(true);
    const [error, setError] = useState("");

    const provider = new GoogleAuthProvider();

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
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
                    <label>Password</label>
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

            <button className="google-button" onClick={handleGoogleSignIn}>
                Continue with Google
            </button>

            <button className="account-toggle" onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? "Create an account" : "Already have an account?"}
            </button>

            {error && <p className="account-error">{error}</p>}
        </div>
    );
}