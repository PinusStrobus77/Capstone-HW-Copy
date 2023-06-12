// import React from "react";
import { FaArrowDown, FaArrowUp, FaLinkedin, FaLink, FaGithub, FaDiceD20 } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Contact = () => {
    // State variables using useState
    const [suggestedAttractions, setSuggestedAttractions] = useState([]); // Stores suggested attractions
    const [loading, setLoading] = useState(false); // Indicates if data is being loaded
    const [selectedCategories, setSelectedCategories] = useState([]); // Stores selected attraction categories
    const [selectedFamilyFriendly, setSelectedFamilyFriendly] = useState(null); // Stores selected family-friendly option
    const [submitClicked, setSubmitClicked] = useState(false); // Indicates if submit button is clicked
    // Function to handle click on category suggestion
    const handleSuggestionClick = (category) => {
      if (category === null) {
        setSelectedCategories([]); // Reset selected categories
        setSubmitClicked(false); // Reset submitClicked flag
      } else {
        const updatedCategories = [...selectedCategories];
        if (updatedCategories.includes(category)) {
          updatedCategories.splice(updatedCategories.indexOf(category), 1); // Remove category if already selected
        } else {
          updatedCategories.push(category); // Add category if not already selected
        }
        setSelectedCategories(updatedCategories);
      }
    };
    // Function to handle click on family-friendly option
    const handleTravelingWithClick = (familyFriendly) => {
      // If the familyFriendly parameter is null, indicating a reset button click
      if (familyFriendly === null) {
        setSelectedFamilyFriendly(null); // Reset the selected family-friendly option to null
        setSubmitClicked(false); // Reset the submitClicked state to false to hide the suggestions
      } else {
        // If a specific family-friendly option is clicked
        setSelectedCategories([]);  // Reset the selectedCategories state to an empty array, clearing any previously selected categories
        setSelectedFamilyFriendly(familyFriendly); // Set the selected family-friendly option based on the clicked button
        setSubmitClicked(false); // Reset the submitClicked state to false to hide the suggestions
      }
    };
    // Function to handle submit button click
    const handleSubmit = () => {
      setSubmitClicked(true);
    };
    // useEffect hook to fetch data when submitClicked changes
    useEffect(() => {
      if (submitClicked) {
        setLoading(true); // Set loading flag to true
        axios
          .get('http://localhost:5000/attractions/') // Fetch data from the specified URL
         // Fetch data from the specified URL
          .then((response) => {
            const attractions = response.data; // Extract data from the response
            let filteredAttractions = attractions;
            if (selectedCategories.length > 0 || selectedFamilyFriendly !== null) {
              filteredAttractions = attractions.filter((attraction) => {
                const categoryMatch = selectedCategories.includes(attraction.category); // Check if attraction category is selected
                const familyFriendlyMatch =
                  selectedFamilyFriendly === null ||
                  attraction.familyFriendly === selectedFamilyFriendly; // Check if attraction is family-friendly
                return categoryMatch && familyFriendlyMatch; // Return attractions that match the selected categories and family-friendly option
              });
            }
            const randomAttractions = selectRandomAttractions(filteredAttractions, 10); // Select 10 random attractions from the filtered list
            setSuggestedAttractions(randomAttractions); // Update suggestedAttractions state with the selected attractions
            setLoading(false); // Set loading flag to false
          })
          .catch((error) => {
            console.log(error); // Log any errors that occur during the request
            setLoading(false); // Set loading flag to false
          });
      }
    }, [submitClicked]);
    // Function to select random attractions from the given list
    const selectRandomAttractions = (attractions, count) => {
      const shuffled = attractions.sort(() => 0.5 - Math.random()); // Shuffle the attractions randomly
      return shuffled.slice(0, count); // Return the specified number of attractions from the shuffled list
    };
    // Function to render suggested attractions
    const renderSuggestedAttractions = () => {
      if (submitClicked) {
        if (loading) {
          return <div className="">Loading...</div>; // Render loading message while data is being fetched
        }
        if (suggestedAttractions.length === 0) {
          return <div className="">No attractions found for the selected categories.</div>; // Render message if no attractions match the selected categories
        }
        return (
          <div className="container">
          <div className='row'>
            {suggestedAttractions.map((attraction) => (
              <div className="col-md-4 col-sm-12 mb-4" key={attraction._id}>
              <img src={attraction.imgUrl} className="card-img-top img-fluid" alt="" />
              <div className="card-body">
                <h5 className="card-title">{attraction.name}</h5>
                <p className="card-text">{attraction.description}</p>
                <p><a href={attraction.website}>Their Website</a></p>
                </div>
                {/* Render other attraction details here */}
              </div>
            ))}
          </div></div>
        );
      }
      return null;
    };
    return(
        <div>
{/* //section one "contact" landing page */}
<section id="section-one">
            <header className="container-fluid" id="contact">
                <div className="container-fluid text-center text-black">
                    <br />
                    <h1 className="display-3" id="contact-header"></h1>
                    <a href="https://www.artworkscincinnati.org/mural/reaching-new-heights/" target="_blank" rel="noopener noreferrer"><Button variant="info"><i className="bi bi-info-lg"></i></Button></a>
                    <br />
                    <a href="/contact#trip-planner">
                        <FaArrowDown className="icons" />
                    </a>
                </div>
            </header>
        </section>
        <br />

   <section id="trip-planner"> 
   <div className="container justify-content-center flex-wrap" >
     <div className="row"><div className="col-lg-3"></div>
      <div className='col-lg-6 border border-white'>
        <h2>Select Your Trip Date</h2>
        <div className="justify-content-center">
          <div className="text-center">
            <input type="text" className="form-control mb-2 mr-sm-2" placeholder="Start Date" />
            <input type="text" className="form-control mb-2 mr-sm-2" placeholder="End Date" />
          </div>
        </div>
  <h2>Traveling With</h2>
  <div className=" btn-group-lg">
    <button className="btn btn-primary" onClick={() => handleTravelingWithClick(true)}>Family Friendly</button>
    <button className="btn btn-primary" onClick={() => handleTravelingWithClick(false)}>Not Family Friendly</button>
    <button className="btn btn-secondary" onClick={() => handleTravelingWithClick(null)}>Reset</button> {/* Reset button for Traveling With */}
  </div>
  <h2>Select Category</h2>
  <div className=" btn-group-lg">
    <button className="btn btn-primary" onClick={() => handleSuggestionClick('arts')}>Arts</button>
    <button className="btn btn-primary" onClick={() => handleSuggestionClick('food')}>Food</button>
    <button className="btn btn-primary" onClick={() => handleSuggestionClick('outdoor')}>Outdoor</button>
    <button className="btn btn-primary" onClick={() => handleSuggestionClick('historical')}>Historical</button>
    <button className="btn btn-primary" onClick={() => handleSuggestionClick('sports')}>Sports</button>
    <button className="btn btn-primary" onClick={() => handleSuggestionClick('family fun')}>Family Fun</button>
    <button className="btn btn-secondary" onClick={() => handleSuggestionClick(null)}>Reset Categories</button>
    
  </div>
  <br/>
  <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
</div>
    </div></div>
  </section>      
  {/* Render suggested attractions */}
  <div className='row'>
    {renderSuggestedAttractions()}
 </div> 
  <section id="contact-form" className="container justify-content-center">
  <div className="row"><div className="col-12">
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfWis1vbFlVjI-IzWU2xBNLHicrYoAbjLrwrAfEoqmSM5IFAA/viewform?embedded=true" width="100%" height={880} frameBorder={0} marginHeight={0} marginWidth={0} scrolling="no">Loading…</iframe>
  </div></div>
</section>

   
        </div>
    )
}

export default Contact