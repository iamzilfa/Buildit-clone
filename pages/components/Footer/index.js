import Link from "next/link";

const Footer = () => {
  return (
    <div className="h-full bg-textGray -mt-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-aliceBlue pt-24 py-32 pl-28">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-y-5">
            <Link href="/" className="text-2xl font-bold ">Buildit</Link>
            <p className="text-base">Development company, 2022 </p>
          </div>
          <p>Site design – <span className="border-b">⏰ Alarm </span> </p>
        </div>
        <div className="flex flex-col gap-y-5">
          <div className="flex flex-col gap-y-6">
            <div className="flex flex-col gap-y-3">
              <h3>Service 1</h3>
              <h3>Service 2</h3>
              <h3>Service 3</h3>
              <h3>Service 4</h3>
            </div>
            <div className="flex gap-5">
              <img src="/img/instagram.svg" alt="" />
              <img src="/img/facebook.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-3">
          <Link href="/about">About us</Link>
          <Link href="/services">Services</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="flex flex-col justify-between">
          <div className="space-y-3">
            <h3>Get in touch</h3>
            <h3>
              60 Manor Station St. Fairport, <br /> NY 14450
            </h3>
          </div>
          <h3>
            708-790-0000 <br /> sales@buildit.site
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
