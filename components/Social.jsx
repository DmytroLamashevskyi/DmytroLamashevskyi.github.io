import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaItchIo } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/DmytroLamashevskyi", label: "GitHub" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/lamashevskyi/", label: "LinkedIn" },
  { icon: <FaItchIo />, path: "https://lamashevskyi.itch.io/", label: "itch.io" },
];

const Social = ({ containerStyles, iconStyles }) => (
  <div className={containerStyles}>
    {socials.map((item) => (
      <Link key={item.path} href={item.path} target="_blank" rel="noreferrer" aria-label={item.label} className={iconStyles}>
        {item.icon}
      </Link>
    ))}
  </div>
);

export default Social;
