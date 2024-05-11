import React from "react";
import { listings } from "./listings";

function ListingCard() {
  const listingComponents= listings.map((listing) => (
  <div key={listing.id}>
    <h2>{listing.description}</h2>
    <img src={listing.image} alt={listing.description}/>
   </div>  
  ))

  return (
  <div>
    <h1>Free Stuff Page</h1>
    {listingComponents}
  </div>
  )
}

export default ListingCard;