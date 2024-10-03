import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CardView from "./components/CardView";
import DetailPage from "./components/DetailPage";
import TableView from "./components/TableView";
import { fetchListings } from "./mock/api";
import "./App.css";

const App = () => {
  const [view, setView] = useState('table'); //This will be used to toggle between table and card
  const [listings, setListings] = useState([]); 


  useEffect(() => {
    fetchListings().then((data) => setListings(data)); 
  }, []);

  return ( 
    <Router>
      <div>
        <h1>Property Listing</h1>
        <div className="view-toggle">
          <button onClick={() => setView('table')}>Table View</button>
          <button onClick={() => setView('card')}>Card View</button>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              view === 'table' ? (
                <TableView listings={listings} />
              ) : (
                <CardView listings={listings} />
              )
            }
          />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
