import React, { useEffect, useState } from "react";
import axios from "axios";

const Tripbuilder = () => {
  const [tripbuilder, setTripbuilder] = useState([]);

  useEffect(() => {
    // Fetch the attractions from the database
    axios.get("/arts")
      .then((response) => {
      
        setTripbuilder(response.data);
      })
      .catch((error) => {

        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>Attractions</h2>
      {/* Render the attractions */}
      <ul>
        {tripbuilder.map((tripbuilder) => (
          <li key={tripbuilder._id}>{tripbuilder.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Tripbuilder;
