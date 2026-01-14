import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Login.css'
const Login = () => {
    const url="http://localhost:4000";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(url+"/api/food/login", {
        username,
        password,
      });
      if (response.data.success) {
        localStorage.setItem("adminToken", response.data.token);
        navigate("/admin");
      }
    } catch (err) {
      setError("লগিন ব্যর্থ হয়েছে। ব্যবহারকারী নাম বা পাসওয়ার্ড চেক করুন");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dd">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center h"> <span className="s">এডমিন লগিন</span></h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <div className="d"> 
        <form onSubmit={handleSubmit} className="all">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 ll">ব্যবহারকারী নাম</label>
            <input 
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required placeholder="Name..."
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" pp><span className="pp">পাসওয়ার্ড</span></label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded "
              required placeholder="Enter password..."
            />
          </div>
          <button
            type="submit"
            className="po w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 b"
          >
            লগিন
          </button>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Login;