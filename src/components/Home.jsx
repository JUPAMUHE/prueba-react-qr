import { useAuth } from "../context/AuthContext"

export const Home = () => {
  
  const { user, logout, loading } = useAuth();
  const handleLogout = async () => {

    try {
      await logout();
    } catch (error) {
      console.log(error.message);
    }
  }
  

  if(loading) return <h1>Cargando.....!!!</h1>;
  
  return (
    <div>
       { user.email }

       <button onClick={ handleLogout }>
          Salir
       </button>
    </div>
  )
}

