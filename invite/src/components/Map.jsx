import React, { Component } from "react";
import "../css/Map.css";
function Map() {
  return (
    <div>
      <div className="text">
        <h3>Having issues reaching us?</h3>
        <div>Here is the map to assist you</div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3837.4916841088966!2d74.52031261472149!3d15.883291588995958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf6136306ccf0b%3A0x5b96f65f5b9d0011!2sKPTCL%20Samudaya%20Bhavana!5e0!3m2!1sen!2sin!4v1679226020287!5m2!1sen!2sin"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="map"
      ></iframe>
    </div>
  );
}

export default Map;
