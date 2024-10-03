import React, { useState, useEffect } from "react";

//1- Functions: sort, filter, search
//2- 30 listings

const TableView = ({ listings }) => {
  const [sortOrder, setSortOrder] = useState("asc"); // Sorting

  const sortedListings = [...listings].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    //Creation of table
    <div className="container mt-4 ">
      <button onClick={toggleSortOrder} className="sort-btn btn mb-3">
        Sort by Price: {sortOrder === "asc" ? "Ascending" : "Descending"}
      </button>
      <table className="table table-info table-striped table-bordered border-info">
        <thead>
          <tr>
            <th>Title</th>
            <th>Address</th>
            <th>Beds</th>
            <th>Baths</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {sortedListings.map((listing, index) => (
            <tr key={index}>
              <td>
                <a href={`/detail/${index}`} className="text-primary">
                  {listing.title}
                </a>
              </td>
              <td>{listing.address}</td>
              <td>{listing.beds}</td>
              <td>{listing.bath}</td>
              <td>{listing.price.toLocaleString()} PKR</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableView;
