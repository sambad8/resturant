
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section className='about' id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>We provide quality food that meets your taste and budget. </p>
          </div>
          <p className="mid">
            Established in 1995, Vintage-Restro is not just serving delicious food, we are serving history. For over two decades, we have been a cherished gathering place, crafting memorable meals and fostering connections over shared plates. Come experience the legacy and create lasting memories of your own.
          </p>
          <Link to={"/"}>Explore Menu <span><HiOutlineArrowNarrowRight/></span></Link>
        </div>
        <div className="banner">
          <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
