import About from "./About";
import Banner from "./Banner";
import Services from "./Services";

const HomePage = () => {
    return (
        <div className="">
           <Banner></Banner>
          <div className="max-w-7xl mx-auto">
          <About></About>
          </div>
           <Services></Services>

        </div>
    );
};

export default HomePage;