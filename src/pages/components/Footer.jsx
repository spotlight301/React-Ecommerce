import FooterLink from "./FooterLink";

let quickLink = [
  { title: "home", url: "/", isExternalLink: false },
  { title: "cars", url: "/cars", isExternalLink: false },
  { title: "services", url: "/services", isExternalLink: false },
  { title: "about", url: "/about", isExternalLink: false },
]

let ourBranches = [
  { title: "england", url: "https://maps.app.goo.gl/y39qu57PNSu4smE78", isExternalLink: true },
  { title: "USK", url: "https://maps.app.goo.gl/enSJrV2fJnBQhs749", isExternalLink: true },
  { title: "france", url: "https://maps.app.goo.gl/5D2RVmnRDjrT6ZKD6", isExternalLink: true },
]

let contacts = [
  { title: "facebook", url: "https://www.facebook.com/Indivastoreeg", isExternalLink: true },
  { title: "youtube", url: "https://www.youtube.com/watch?v=-nVDs5CNaYo", isExternalLink: true },
]

const Footer = () => {
  return (
    <footer className="bg-[#113a82] text-white">
      {/*======================= ROW =======================*/}
      <div className="flex flex-wrap justify-around p-2 pb-5">

        {/*======================= COL =======================*/}
        <div className="flex flex-col">
          <h2 className="font-black text-xl py-3 max-sm:text-base">quick link</h2>
          <div className="flex flex-col items-start gap-1">
            {quickLink.map((link, idx) => (
              <FooterLink link={link} key={idx} />
            ))}
          </div>
        </div>

        {/*======================= COL =======================*/}
        <div className="flex flex-col">
          <h2 className="font-black text-xl py-3 max-sm:text-base">our branches</h2>
          <div className="flex flex-col items-start gap-1">
            {ourBranches.map((link, idx) => (
              <FooterLink link={link} key={idx} />
            ))}
          </div>
        </div>

        {/*======================= COL =======================*/}
        <div className="flex flex-col">
          <h2 className="font-black text-xl py-3 max-sm:text-base">contact info</h2>
          <div className="flex flex-col items-start gap-1">
            {contacts.map((link, idx) => (
              <FooterLink link={link} key={idx} />
            ))}
          </div>
        </div>
      </div>

      {/*======================== Under Text ========================*/}
      <div className="text-center border-t-2 border-t-white">
        <h3 className="font-black p-3 text-[1.4rem] max-sm:text-[1rem] text-yellow-300 capitalize drop-shadow-footerShadow">
          created by <span className="text-red-500">dragons</span> || all rights
          reserved
        </h3>
      </div>
    </footer>
  );
}

export default Footer;
