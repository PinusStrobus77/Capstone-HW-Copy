import React from "react";
import {Link} from 'react-router-dom'
import axios from "axios";

const Contact = () => {
    return(
        <div>
   <section id="trip-planner" className="d-flex justify-content-center" >
     <div className="border border-white">
      <div>
        <h2>Select Your Trip Date</h2>
        <div className="d-flex justify-content-center">
          <div className="text-center">
            <input type="text" className="form-control mb-2 mr-sm-2" placeholder="Start Date" />
            <input type="text" className="form-control mb-2 mr-sm-2" placeholder="End Date" />
          </div>
        </div>
      </div>

      <div>
        <h2>Traveling With</h2>
        <div className="btn-group" >
          <button className="btn btn-primary btn-light">Alone</button>
          <button className="btn btn-primary btn-light">With Family</button>
          <button className="btn btn-primary btn-light">With Friends</button>
          <button className="btn btn-primary btn-light">With a Partner</button>
        </div>
      </div>

      <div>
        <h2>Select Category</h2>
        <div>
          <button>Arts</button>
          <button>Food</button>
          <button>Outdoor</button>
          <button>Historical</button>
          <button>Sports</button>
          <button>Family Fun</button>
        </div>
      </div>
    </div>
  </section>
  <section id="contact-form" className="d-flex justify-content-center">
  <div className="border border-primary rounded p-4">
    <h2 className="mb-4">Questions? Contact us Below!</h2>
    <div className="text-center">
      <textarea name="contact" id="contact" className="form-control mb-2" rows="10"></textarea>
      <button className="btn btn-primary btn-light">Submit</button>
    </div>
  </div>
</section>

   
        </div>
    )
}

export default Contact