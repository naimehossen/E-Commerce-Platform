import { Outlet, Link, useNavigate, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Add from '../pages/Add/Add';
import List from '../pages/List/List';
import Orders from '../pages/Orders/Orders';

const Layout = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    if(!localStorage.getItem('adminToken')) {
      navigate('/login');
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/login');
  };

     const url="http://localhost:4000"
  return (
    
    <div className="flex h-screen bg-gray-100">
      {/* সাইডবার */}
      <div className="w-64 bg-gray-800 text-white">
        <div className="p-4 text-xl font-bold">এডমিন প্যানেল</div>
        <nav className="mt-5">
          <Link to="/admin" className="block py-2 px-4 hover:bg-gray-700">ড্যাশবোর্ড</Link>
          <Link to="/admin/products" className="block py-2 px-4 hover:bg-gray-700">প্রোডাক্ট ম্যানেজ</Link>
          <button 
            onClick={handleLogout}
            className="w-full text-left py-2 px-4 hover:bg-gray-700"
          >
            লগ আউট
          </button>
        </nav>
      </div>

      {/* মেইন কন্টেন্ট */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="bg-white shadow p-4">
          <h1 className="text-xl font-semibold">প্রোডাক্ট ম্যানেজমেন্ট সিস্টেম</h1>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          <Outlet />
        </div>
      </div>
      <div className="page">
        <Routes>
            <Route path='/add' element={<Add url={url}/>}/>
            <Route path='/list' element={<List url={url}/>}/>
              <Route path='/orders' element={<Orders url={url}/>}/>
        </Routes>

        <li><a href="/add">add</a></li>
      </div>
    </div>
  );
};

export default Layout;