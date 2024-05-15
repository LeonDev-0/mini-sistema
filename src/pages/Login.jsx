import { useState } from "react";
import { supabase } from "../supabase/supabase";

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isRegistering) {
      try {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        alert("Check your email for the verification link!");
      } catch (error) {
        alert(error.error_description || error.message);
      }
    } else {
      try {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        alert("Login successful!");
      } catch (error) {
        alert(error.error_description || error.message);
      }
    }
  };

  return (
    <div>
      <h1>{isRegistering ? "Register" : "Login"}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">{isRegistering ? "Register" : "Login"}</button>
      </form>
      <button onClick={() => setIsRegistering(!isRegistering)}>
        {isRegistering ? "Already have an account? Login" : "Need to register?"}
      </button>
    </div>
  );
};

export default AuthForm;

