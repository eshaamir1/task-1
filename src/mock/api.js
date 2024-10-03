import React from 'react';
import Listings from './listings';

// Fetch all listings
export const fetchListings = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Listings);
    }, 1000);
  });
};

// Fetch listing by ID
export const fetchListingById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const listing = Listings.find(listing => listing.id === id);
      if (listing) {
        resolve(listing);
      } else {
        reject(new Error("Listing not found"));
      }
    }, 1000);
  });
};

