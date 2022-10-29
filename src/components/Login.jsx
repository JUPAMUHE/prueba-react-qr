import { useState } from "react"
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Alert } from "./Alert";
import image from "../Imagenes/google.png"
import image2 from "../Imagenes/facebook.png"

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
      console.log(error.code);
      
      if(error.code === 'auth/invalid-email'){
        setError('Correo Invalido');
      }

      if(error.code === 'auth/user-not-found'){
        setError('Este usuario no tiene permisos');
      }

      if(error.code === 'auth/wrong-password'){
        setError('Contraseña incorrecta');
      }
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

    <div className="w-full max-w-xs m-auto">
      <form onSubmit={ handleSubmit } className="bg-white shadow-md rounded px-8 py-6 pb-8 mb-4 ">
          <div className="mb-4">
            <label className="content-center block text-gray text-lg font-bold mb-3 ">LOGIN</label>
            <label 
              className="block text-gray-700 text-sm font-bold mb-2">Email
            </label>
            <input 
              className="shadow appearance-none rounded w-full py-1 px-3 text-gray-700 leading-tight focus:autoline-none focus:shadow-outline" 
              type="email" 
              name="email" 
              id="email" 
              placeholder="Email@gmail.com" 
              onChange={ handleChange } 
            />
          </div>
          
          <div className="mb-4">
            <label 
              className="block text-gray-700 text-sm font-bold mb-2">Password
            </label>
            <input 
              className="shadow appearance-none rounded w-full py-1 px-3 text-gray-700 leading-tight focus:autoline-none focus:shadow-outline" 
              type="password" 
              name="password" 
              id="password"  
              placeholder="*******" 
              onChange={ handleChange }
            /> 
          </div>

          <button 
            className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline">Login
          </button>
      </form>
      <div className="grid place-items-center">
        <button 
            onClick={ handleGoogleSingIn }
            className=" bg-slate-50 hover:bg-slate-200 text-black shadow-md rounded-xl border-gray-300 py-2 px-2  ">
              <img src={ image } width="30" height="30"/> 
    
        </button>
      </div>
          
             
      { error && <Alert message={ error } /> }
    </div>
  )
}
