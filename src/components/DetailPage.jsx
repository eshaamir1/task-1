import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchListingById } from "../mock/api";

const DetailPage = () => {
  const { id } = useParams();
  const [listing, setListing] = useState(null);

  useEffect(() => {
    fetchListingById(Number(id)).then((data) => setListing(data));
  }, [id]);

  if (!listing) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <h2>{listing.title}</h2>
      <img src={listing.imageUrl} alt={listing.title} />
      <p>Address: {listing.address}</p>
      <p>Beds: {listing.beds}</p>
      <p>Baths: {listing.bath}</p>
      <p>Covered Area: {listing.coveredAreaSQFT} sqft</p>
      <p>Price: {listing.price} PKR</p>
      <p>{listing.isCommercial ? "Commercial" : "Residential"}</p>
    </div>
  );
};

export default DetailPage;
