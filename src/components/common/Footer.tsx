import { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [tabIndex, setTabIndex] = useState<number>(1);
  return (
    <div className="fixed bottom-0 left-0 right-0  h-14 pt-4 text-center bg-black text-white  border-none phone-width  ">
      <div className="flex">
        <div
          className="w-1/4 grid place-items-center"
          onClick={() => {
            setTabIndex(1);
          }}
        >
          <Link to="/">
            <div className="h-6 text-bottom">HOME</div>
          </Link>
          <div className="h-10">
            {1 === tabIndex && <img src="/assets/rect.svg" />}
          </div>
        </div>
        <div
          className="w-1/4 grid place-items-center"
          onClick={() => {
            setTabIndex(2);
          }}
        >
          <Link to="/blog">
            <div className="h-6 ">BLOG</div>
          </Link>
          <div className="h-10">
            {2 === tabIndex && <img src="/assets/rect.svg" />}
          </div>
        </div>
        <div
          className="w-1/4 grid place-items-center"
          onClick={() => {
            setTabIndex(3);
          }}
        >
          <Link to="/product">
            <div className="h-6 ">SHIPPING</div>
          </Link>
          <div className="h-10">
            {3 === tabIndex && <img src="/assets/rect.svg" />}
          </div>
        </div>
        <div
          className="w-1/4 grid place-items-center"
          onClick={() => {
            setTabIndex(4);
          }}
        >
          <Link to="/out_story">
            <div className="h-6 ">ME</div>
          </Link>
          <div className="h-10">
            {4 === tabIndex && <img src="/assets/rect.svg" />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
