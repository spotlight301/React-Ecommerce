import { Link } from "react-router-dom";

const FooterLink = (props) => {
  return (
    <>
      {(props.isExternalLink ? (
        <a
          className="hover:text-text text-white transition-all duration-[.2s] text-base max-sm:text-sm font-semibold capitalize"
          url={props.link.url}
        >
          {props.link.title}
        </a>
      ) : (
        <Link
          className="hover:text-text text-white transition-all duration-[.2s] text-base max-sm:text-sm font-semibold capitalize"
          to={props.link.url}
          rel="noopener noreferrer"
        >
          {props.link.title}
        </Link>
      ))}
    </>
  );
}

export default FooterLink;
