/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import event1 from "../../assets/event-work-1.jpg";
import event2 from "../../assets/event-work-3.jpg";
import event3 from "../../assets/event-work-4.jpg";
import event4 from "../../assets/people-sitting-on-green-grass.jpg";

const OurWorks = () => {
  const { pathname } = useLocation();
  return (
    <section className="mb-5">
      <div className="flex justify-between items-end py-5">
        <div>
          <h1 className="text-primary-color text-2xl font-semibold py-2">
            Portfolio
          </h1>
          <h2 className="text-3xl md:text-4xl font-medium">Featured Works</h2>
        </div>
        <div>
          {pathname == "/" && (
            <Link to={"/our-works"}>
              <button className="border border-primary-color px-5 py-2 font-medium text-lg hover:bg-primary-color hover:text-white rounded">
                View All
              </button>
            </Link>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <img className="mb-2 w-full" src={event1} alt="event-image" />
          <p className="text-2xl p-2 font-medium border-l border-primary-color">
            Hexatron Factory Open Day
          </p>
        </div>
        <div>
          <img className="mb-2 w-full" src={event2} alt="event-image" />
          <p className="text-2xl p-2 font-medium border-l border-primary-color">
            Eroforce Global Product Launch
          </p>
        </div>
        {pathname == "/our-works" && (
          <div>
            <img className="mb-2 w-full" src={event4} alt="event-image" />
            <p className="text-2xl p-2 font-medium border-l border-primary-color">
              APA Classic Company Picnic
            </p>
          </div>
        )}
        {pathname == "/our-works" && (
          <div>
            <img className="mb-2 w-full" src={event3} alt="event-image" />
            <p className="text-2xl p-2 font-medium border-l border-primary-color">
              Hexatron Factory Open Day
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default OurWorks;
