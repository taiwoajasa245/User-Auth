import { useState } from "react";
import { message } from "antd";
import { useAuth } from "../contexts/AuthContext.jsx";

const userLogin = () => {
  const { login } = useAuth(); 
  const [error, setError] = useState(null); 
  const [loading, setLoading] = useState(null);

  const logUserIn = async (values) => { 

     

    try {
      setError(null); 
      setLoading(true);  
      
      const res = await fetch('http://localhost:4000/api/auth/login', { 
        method: 'POST', 
        headers: { 
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify(values)
      })

      const data = await res.json();
      if(res.status === 200){ 
          message.success(data.message); 
          login(data.token, data.user); 
        }else if (res.status === 400) {
            setError(data.message);
      }else{ 
        message.error('Login failed '); 
      }
    } catch (error) {
      message.error('An error occurred. Please try again later.'); 
    }finally { 
      setLoading(false); 
    }
  }; 

  return { loading, error, logUserIn };
}

export default userLogin