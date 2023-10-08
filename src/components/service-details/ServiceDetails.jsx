/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
  const [service, setService] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => {
        const filterdData = data.find((item) => item.id == id);
        return setService(filterdData);
      });
  }, [id]);
  return (
    <div>
      <div>
        <img
          className="w-full h-[60vh] object-cover"
          src={service.image}
          alt=""
        />
      </div>
      <div>
        <h1 className="text-3xl font-semibold py-3">{service.name}</h1>
        <p className="text-lg py-2">{service.description}</p>
        <p className="text-lg pb-2">
          Price: <span className="font-medium">{service.price}</span>
        </p>
        {service?.keyServices?.map((item) => (
          <li
            className="font-medium pb-2"
            key={service?.keyServices?.indexOf(item)}
          >
            {item}
          </li>
        ))}
        <p className="text-lg font-medium py-3">
          Contact for order: <br /> Phone: +8801622222222 <br /> E-mail:
          event-management@gmail.com
        </p>
      </div>
    </div>
  );
};

export default ServiceDetails;
