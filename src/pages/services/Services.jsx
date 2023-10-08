/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Service from "../../components/service/service";

const Services = () => {
  const { pathname } = useLocation();
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => {
        if (pathname == "/") {
          const services = data.slice(0, 3);
          return setServices(services);
        } else {
          return setServices(data);
        }
      });
  }, [pathname]);

  return (
    <section>
      <div className="text-center">
        <h4 className="text-primary-color text-2xl font-semibold py-2">
          Our Services
        </h4>
        <h1 className="text-4xl font-semibold">Corporate Event Management</h1>
        <p className="text-lg py-2">
          Elevate your corporate events with our expert planning. We handle all
          the details for seamless, memorable experiences.
        </p>
        {pathname == "/" && (
          <Link to={"/services"}>
            <button className=" border border-primary-color px-5 py-2 hover:bg-primary-color hover:text-white font-medium text-primary-color">
              View All Services
            </button>
          </Link>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5">
        {services?.map((service) => {
          return <Service key={service.id} service={service} />;
        })}
      </div>
    </section>
  );
};

export default Services;
