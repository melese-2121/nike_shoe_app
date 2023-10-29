import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-sm:px-2">
      <div className="flex justify-between items-center">
        <div className="flex-col justify-sart items-start w-[50%]">
          <a href="/">
            <img src={footerLogo} alt="footer logo" width={130} height={117} />
          </a>
        </div>
        <div className="flex justify-end items-end gap-x-5 ">
          {socialMedia.map((item) => (
            <div
              key={item.alt}
              className="bg-zinc-400 rounded-full hover:cursor-pointer hover:bg-zinc-200 p-1"
            >
              <img src={item.src} alt={item.alt} width={25} height={25} />
            </div>
          ))}
        </div>
      </div>
      <p className="text-zinc-500 font-serif py-5 w-[50%] hover:text-zinc-400">
        get shoes ready for the new term at your nearest Nike store. Find your
        perfect size in store. Get Rewards
      </p>
      <hr />
      <div className=" flex justify-evenly items-baseline text-zinc-200 mt-5">
        {footerLinks.map((item) => (
          <div key={item.title}>
            <h1 className="text-xl font-bold py-3">{item.title}</h1>
            <div>
              {item.links.map((linkData) => (
                <p key={linkData.name}>
                  <a
                    href={linkData.link}
                    className="text-zinc-500 hover:text-zinc-200 font-serif"
                  >
                    {linkData.name}
                  </a>
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-end mt-10 font-thin">
        <div className="flex">
          <img src={copyrightSign} alt="copyright" width={20} height={20} />
          <p className="text-white pl-2"> Copyright. All right reserved.</p>
        </div>
        <p className="text-white">Terms and Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
