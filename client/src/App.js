import React, { useEffect, useState } from 'react';
import { UidContext } from "./components/AppContext";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from "axios";
import { useDispatch } from "react-redux";
import { getUser } from "./actions/user.actions";


import Home from './pages/Home';
import Profil from './pages/Profil';
import Trending from './pages/Trending';
import Navbar from './components/Navbar';


const App = () => {
  const [uid, setUid] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchToken = async () => {
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials: true,
      })
        .then((res) => {
          setUid(res.data);
        })
        .catch((err) => console.log("No token"));
    };
    fetchToken();

    if (uid) dispatch(getUser(uid));
  }, [uid, dispatch]);


  return (
    <UidContext.Provider value={uid}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/trending" element={<Trending />} />
        </Routes>
      </BrowserRouter>  
    </UidContext.Provider>
  );
};

export default App;
