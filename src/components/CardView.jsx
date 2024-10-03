import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardView = ({ listings }) => {
  return (
    <div className="container mt-4">
      <div className="row">
        {listings.map((listing) => (
          <div key={listing.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img src={listing.imageUrl} alt={listing.title} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{listing.title}</h5>
                <p className="card-text">{listing.address}</p>
                <p className="card-text">
                  {listing.beds} Beds, {listing.bath} Baths
                </p>
                <p className="card-text">Price: {listing.price}</p>
                <Link to={`/detail/${listing.id}`} className="btn btn-info">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardView;
