import { useState } from "react"
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {

  const [user, setUser] = useState({
      email: "",
      password: "",
  });

  const { login,loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const [error,setError] = useState();

  const handleChange = ({ target: { name, value }}) => setUser({ ...user,  [ name ]: value });

  const handleSubmit =  async(e) => {
    e.preventDefault();
    setError('');
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSingIn = async() => {

    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
    
  }

  return (

    <div>
      { error && <p>{ error }</p> }
      <form onSubmit={ handleSubmit }>
          <label>Email</label>
          <input type="email" name="email" id="email" placeholder="Email@gmail.com" onChange={ handleChange }/>
          
          <label>Password</label>
          <input type="password" name="password" id="password"  placeholder="*******" onChange={ handleChange }/> 
           
          <button>Login</button>

          <button onClick={ handleGoogleSingIn }>GOOGLE</button>
      </form>
    </div>
  )
}

