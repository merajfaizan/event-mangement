import { Link } from "react-router-dom";
import AboutUs from "../About-us/AboutUs";
import OurWorks from "../Our-Works/OurWorks";
import Services from "../services/Services";

const Home = () => {
  return (
    <section>
      <div className="md:flex justify-center items-center gap-5">
        <div className="flex-1 mb-5 md:mb-0">
          <h1 className="text-5xl font-semibold mb-5">
            The UK’s Best Event Management Agency for Corporate
          </h1>
          <p className="text-lg mb-10">
            Turning Dreams into Memorable Events! Your Vision, Our Expertise,
            Unforgettable Moments Await. Discover the Perfect Event, Crafted
            Just for You.
          </p>
          <Link
            className="bg-black text-white font-medium px-5 py-2 rounded-md inline-block"
            to={"/services"}
          >
            Learn More
          </Link>
        </div>
        <div className="flex-1">
          <img
            className="w-full h-full rounded"
            src="https://i.ibb.co/h1x2dXv/toasting-glasses.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="mt-10">
        <AboutUs />
      </div>
      <div className="mt-10">
        <OurWorks />
      </div>
      <div className="mt-10 mb-5">
        <Services />
      </div>
    </section>
  );
};

export default Home;
