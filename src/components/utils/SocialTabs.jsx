import { personalData } from "./data/textval";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const SocialTabs = () => {
  return (
    <div className="fw-max p-3 flex justify-around items-center gap-6 md:justify-normal mx-auto md:mx-0 md:mr-auto">
      <a
        href={personalData.github}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-all text-white hover:scale-125 duration-300"
      >
        <BsGithub size={30} />
      </a>
      <a
        href={personalData.linkedIn}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-all text-white hover:scale-125 duration-300"
      >
        <BsLinkedin size={30} />
      </a>
      <a
        href={personalData.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-all text-white hover:scale-125 duration-300"
      >
        <FaInstagram size={30} />
      </a>
      <a
        href={personalData.leetcode}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-all text-white hover:scale-125 duration-300"
      >
        <SiLeetcode size={30} />
      </a>
      <a
        href={personalData.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-all text-white hover:scale-125 duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width="30"
          height="30"
          fill="currentColor"
        >
          <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
        </svg>
      </a>


    </div>
  );
};

export default SocialTabs;
