import { FaCopyright } from "react-icons/fa";

function Footer() {
  return (
    <div className="flex absolute pt-10 w-full z-[98] justify-center items-center bg-base pb-2">
      <div className="flex items-center space-x-1">
        <FaCopyright className="text-md text-white" />
        <h3 className="text-center text-md text-white ">2023 Beshoy Kamel</h3>
      </div>
    </div>
  );
}

export default Footer;
