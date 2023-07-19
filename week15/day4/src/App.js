/*
------------------->Exercice1

import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorBoundary from "./ErrorBoundary";
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";
import ShopScreen from "./ShopScreen";

const App = () => {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="navbar-nav">
          <NavLink className="nav-link" activeClassName="active" exact to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" activeClassName="active" to="/profile">
            Profile
          </NavLink>
          <NavLink className="nav-link" activeClassName="active" to="/shop">
            Shop
          </NavLink>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<ErrorBoundary><HomeScreen /></ErrorBoundary>} />
        <Route path="/profile" element={<ErrorBoundary><ProfileScreen /></ErrorBoundary>} />
        <Route path="/shop" element={<ErrorBoundary><ShopScreen /></ErrorBoundary>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

------------------->Exercice2

import React from "react";
import PostList from "./PostList";

const App = () => {
  return (
    <div>
      <h1>Posts List</h1>
      <PostList />
    </div>
  );
};

export default App;

------------------->Exercice3
import React from "react";
import Example1 from "./Example1";
import Example2 from "./Example2";
import Example3 from "./Example3";

const App = () => {
  return (
    <div>
      <Example1 />
      <Example2 />
      <Example3 />
    </div>
  );
};

export default App;



------------------->Exercice4

import React, { useState } from "react";

const App = () => {
  const [response, setResponse] = useState(null);

  const handleButtonClick = async () => {
    try {
      const url = "https://webhook.site/a4198a55-ae14-4a57-9c78-a1704ed28520"; 
      const data = {
        key1: "myusername",
        email: "mymail@gmail.com",
        name: "Isaac",
        lastname: "Doe",
        age: 27,
      };
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };

      const res = await fetch(url, requestOptions);
      const jsonData = await res.json();
      setResponse(jsonData);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Send Data to Webhook</button>
      {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
    </div>
  );
};

export default App;






*/
