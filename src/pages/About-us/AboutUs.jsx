/* eslint-disable no-unused-vars */
import React from "react";
import aboutUs from "../../assets/group-of-people-photo-in-room.jpg";
import { useLocation } from "react-router-dom";

const AboutUs = () => {
  const { pathname } = useLocation();
  return (
    <section>
      <div className="md:flex gap-5">
        <div className="flex-1">
          <img className="rounded" src={aboutUs} alt="about-us" />
        </div>
        <div className="flex-1">
          <h1 className="text-primary-color font-semibold text-2xl py-5">
            About Us
          </h1>
          <h2 className="font-medium text-4xl pb-5">
            We Help Corporate to Manage Event
          </h2>
          <p className="text-lg  capitalize">
            Celebrating Success Together: Empowering Corporations with Seamless
            Event Management Solutions.Our dedicated team is your partner in
            ensuring that every event, from conferences to team-building
            retreats, reflects your company&apos;s vision and values.
          </p>
          <div className="flex justify-center items-center w-full mt-5">
            <div className="flex-1 flex flex-col items-center justify-center bg-slate-300 py-5 border-r border-white">
              <span className="text-5xl text-slate-800">1994</span>
              <p className="font-medium pt-2 text-slate-700">ESTABLISHED</p>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center bg-slate-300 py-5 ">
              <span className="text-5xl text-slate-800">100</span>
              <p className="font-medium pt-2 text-slate-700">EMPLOYEES</p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${pathname == "/about-us" ? "block" : "hidden"}`}>
        <h1 className="text-center text-4xl mt-10 capitalize font-medium">
          Our Valuable Clients
        </h1>
        <div
          className={`flex flex-col md:flex md:flex-row justify-center items-center w-full md:h-36 gap-5`}
        >
          <img
            className="flex-1 w-full h-full object-contain block"
            src="https://download.logo.wine/logo/BKash/BKash-bKash2-Logo.wine.png"
            alt="brand-logo"
          />
          <img
            className="flex-1 w-full h-full object-contain block"
            src="https://download.logo.wine/logo/Nagad/Nagad-Logo.wine.png"
            alt="brand-logo"
          />
          <img
            className="flex-1 w-full h-full object-contain block"
            src="https://download.logo.wine/logo/Airtel_Bangladesh/Airtel_Bangladesh-Logo.wine.png"
            alt="brand-logo"
          />
          <img
            className="flex-1 w-full h-full object-contain block"
            src="https://download.logo.wine/logo/PayPal/PayPal-Logo.wine.png"
            alt="brand-logo"
          />
          <img
            className="flex-1 w-full h-full object-contain block"
            src="https://download.logo.wine/logo/Coca-Cola/Coca-Cola-Logo.wine.png"
            alt="brand-logo"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
