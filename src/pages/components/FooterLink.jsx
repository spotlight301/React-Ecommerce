import { Link } from "react-router-dom";

const FooterLink = (props) => {
  return (
    <>
      {(props.isExternalLink ? (
        <a
          className="hover:text-blue-400 transition-all duration-[.2s] text-base max-sm:text-sm font-semibold capitalize"
          url={props.link.url}
        >
          {props.link.title}
        </a>
      ) : (
        <Link
          className="hover:text-blue-400 transition-all duration-[.2s] text-base max-sm:text-sm font-semibold capitalize"
          to={props.link.url}
        >
          {props.link.title}
        </Link>
      ))}
    </>
  );
}

export default FooterLink;
