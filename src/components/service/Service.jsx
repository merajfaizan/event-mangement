/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Service = ({ service }) => {
  return (
    <div data-aos="flip-right">
      <img
        className="mb-2 w-full rounded"
        src={service?.image}
        alt="event-image"
      />
      <h1 className="text-2xl p-2 font-medium border-l border-primary-color">
        {service?.name}
      </h1>
      <p className="py-3">{service?.description}</p>
      <p className="py-2">
        Price: <span>{service.price}</span>
      </p>
      <Link to={`/services/${service?.id}`}>
        <button className=" border border-primary-color px-5 py-2 hover:bg-primary-color hover:text-white font-medium text-primary-color">
          View Details
        </button>
      </Link>
    </div>
  );
};

Service.propTypes = {
  service: PropTypes.object.isRequired,
};

export default Service;
