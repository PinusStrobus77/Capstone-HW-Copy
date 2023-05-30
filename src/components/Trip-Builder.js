import React, { useEffect, useState } from "react";
import axios from "axios";

const Attractions = () => {
  const [attractions, setAttractions] = useState([]);

  useEffect(() => {
    // Fetch the attractions from the database
    axios.get("/arts")
      .then((response) => {
        // Update the attractions state variable with the received data
        setAttractions(response.data);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>Attractions</h2>
      {/* Render the attractions */}
      <ul>
        {attractions.map((attraction) => (
          <li key={attraction._id}>{attraction.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Attractions;
