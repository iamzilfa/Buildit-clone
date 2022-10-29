import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header className="bg-banner">
        <div className="grid grid-cols-2 items-center mx-32 pt-40 pb-24">
          <div className="flex flex-col gap-y-32">
            <div className="flex flex-col gap-y-7">
              <h1 className="font-bold text-6xl text-textGray">
                Development company
              </h1>
              <h2 className="font-normal text-xl leading-9 text-lightGray">
                Forward-thinking real estate developer, owner and investor with
                a reputation
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <button className="w-32 h-16 bg-blueButton not-italic font-bold text-base leading-5 text-center text-gray-100 rounded shadow-blueLight">
                Service
              </button>
              <button className="h-16 bg-indigo-200 rounded not-italic font-bold text-base leading-5  items-center text-center text-textGray w-64">
                About the company
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-y-7">
            <div className="flex gap-7 items-center">
              <img src="/img/konoshi.png" alt="" className="-mb-20" />
              <img src="/img/tradecenter.png" alt="" />
              <img src="/img/chateau.png" alt="" className="-mb-28" />
            </div>
            <div className="flex gap-7">
              <img src="/img/blackbuilding.png" alt="" className="w-96" />
              <img src="img/whitebuilding.png" alt="" className="w-56 h-48" />
            </div>
          </div>
        </div>
      </header>

      <main className="flex flex-col">
        <div className="flex flex-col gap-y-32 bg-aliceBlue pt-52 pb-64">
          <h2 className="font-bold text-4xl text-center text-textGray">
            Innovative Execution
          </h2>
          <div className="flex flex-row justify-center items-center gap-40 ">
            <div className="flex flex-col space-y-6">
              <div className="flex flex-row justify-center items-center p-2 w-16 h-16 bg-gray-600 gap-1 rounded shadow-blueLight">
                <img src="icons/Icon (17).svg" alt="" />
              </div>
              <h2 className="font-bold text-2xl text-textGray">
                Featured Listing
              </h2>
              <p className="font-medium text-base leading-8 text-lightGray">
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
              </p>
            </div>
            <div className="flex flex-col space-y-6 text-textGray">
              <div className="flex flex-row justify-center items-center p-2 w-16 h-16 bg-gray-600 gap-1 rounded shadow-blueLight">
                <img src="icons/Icon (18).svg" alt="" />
              </div>
              <h2 className="font-bold text-2xl">Available Properties</h2>
              <p className="font-medium text-base leading-8 text-lightGray">
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
              </p>
            </div>
            <div className="flex flex-col space-y-6 text-textGray">
              <div className="flex flex-row justify-center items-center p-2 w-16 h-16 bg-gray-600 gap-2 rounded shadow-blueLight">
                <img src="icons/Icon (19).svg" alt="" />
              </div>
              <h2 className="font-bold text-2xl text-textGray">In the News</h2>
              <p className="font-medium text-base leading-8 text-lightGray">
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-28 bg-paleBlue pt-12">
          <div className="flex items-center justify-center space-x-10 border-t border-b border-b-gray-600 border-t-gray-600 py-10 mx-20">
            <img src="/icons/N.svg" alt="" />
            <img src="/icons/Vecttor.svg" alt="" />
            <img src="/icons/logoups.svg" alt="" />
            <img src="/icons/Veector.svg" alt="" />
            <img src="/icons/Vector.svg" alt="" />
          </div>
          <div>
            <div className="grid grid-cols-2 mx-32 mb-40">
              <img src="/img/Фото.png" alt="" />
              <div className="flex flex-col items-start space-y-10 -mt-10">
                <h3 className="font-medium text-base leading-8 text-teal-400">
                  About us
                </h3>
                <h2 className="font-bold text-4xl text-textGray">
                  Owner and investor with a reputation
                </h2>
                <p className="font-medium text-base leading-8 text-lightGray">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  elit sem, vestibulum sed leo eu, malesuada pharetra mauris.
                  Integer rhoncus, eros vel euismod tempor, ipsum magna
                  tristique nisi, quis ullamcorper enim magna eu orci. Sed
                  semper ex quis semper aliquet. Cras hendrerit molestie sapien
                  sed fermentum. Mauris dui tortor, viverra vel ultrices in,
                  congue sed ex.
                </p>
                <button className="flex flex-row justify-center items-center p-0 w-48 h-12 bg-teal-600 not-italic font-bold text-base leading-5 text-center text-gray-100 rounded shadow-blueLight">
                  Explore
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-aliceBlue">
          <div className="grid grid-cols-2 mx-32 gap-10 items-center py-36">
            <div className="flex flex-col space-y-7">
              <h3 className="font-medium text-base leading-8 text-teal-400">
                Available Properties
              </h3>
              <h2 className="font-bold text-4xl text-textGray">
                Featured Listing
              </h2>
              <p className="font-medium text-base leading-8 text-lightGray">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                elit sem, vestibulum sed leo eu, malesuada pharetra mauris.
                Integer rhoncus, eros vel euismod tempor, ipsum magna tristique
                nisi, quis ullamcorper enim magna eu orci. Sed semper ex quis
                semper aliquet. Cras hendrerit molestie sapien sed fermentum.
                Mauris dui tortor, viverra vel ultrices in, congue sed ex.
              </p>
              <button className="flex flex-row justify-center items-center p-0 w-48 h-12 bg-teal-600 not-italic font-bold text-base leading-5 text-center text-gray-100 rounded shadow-blueLight">
                Explore
              </button>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex gap-7">
                <img
                  src="img/Photo.png"
                  alt=""
                  className="w-56 h-48 mt-32 shadow-blueLight"
                />
                <img src="img/Photo (1).png" alt="" className="w-64" />
              </div>
              <div className="flex gap-7 ml-7">
                <img
                  src="img/Photo (2).png"
                  alt=""
                  className="-mt-7 shadow-blueLight"
                />
                <img src="img/Photo (3).png" alt="" className="w-56 h-32" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-paleBlue">
          <div className="flex flex-col space-y-10 pt-40 pb-20">
            <div className="flex flex-col items-center space-y-5">
              <p className="font-medium text-base leading-8 text-center text-teal-400">
                Socials
              </p>
              <h2 className="font-bold text-4xl text-center text-textGray">
                On Instagram
              </h2>
            </div>
            <div className="flex flex-col gap-y-5">
              <div className="flex flex-row justify-center items-center gap-5">
                <img src="/img/Card.png" alt="" />
                <img src="/img/Photo (4).png" alt="" />
                <img src="/img/Photo (5).png" alt="" />
              </div>
              <div className="flex flex-row justify-center items-center gap-5">
                <img src="/img/Photo (6).png" alt="" />
                <img src="/img/Photo (7).png" alt="" />
                <img src="/img/Photo (8).png" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-aliceBlue px-32 py-40">
          <div className="flex justify-between">
            <div className="flex flex-col gap-y-28">
              <div className="flex flex-col items-start space-y-4">
                <p className="font-medium text-base leading-8 text-teal-400">Contact</p>
                <h2 className="font-bold text-4xl text-textGray">Get In Touch</h2>
              </div>
              <div className="flex flex-col gap-y-7 text-textGray">
                <div className="flex gap-8 items-center">
                  <div className="gap-2.5 flex flex-row items-start p-5 bg-paleBlue rounded">
                    <img src="/icons/Icon (20).svg" alt="" />
                  </div>
                  <div>
                    <p className="font-medium text-base leading-8">Tel</p>
                    <p className="font-bold text-xl leading-7">708-790-0000</p>
                  </div>
                </div>
                <div className="flex gap-8 items-center">
                  <div className="gap-2.5 flex flex-row items-start p-5 bg-paleBlue rounded">
                    <img src="/icons/Icon (21).svg" alt="" />
                  </div>
                  <div>
                    <p className="font-medium text-base leading-8">Email</p>
                    <p className="font-bold text-xl leading-7">sales@buildit.site</p>
                  </div>
                </div>
                <div className="flex gap-8 items-center">
                  <div className="gap-2.5 flex flex-row items-start p-5 bg-paleBlue rounded">
                    <img src="/icons/Icon (21).svg" alt="" />
                  </div>
                  <div className="mt-10">
                    <p className="font-medium text-base leading-8">Office</p>
                    <p className="font-bold text-xl leading-7">60 Manor Station St. <br /> Fairport, NY 14450</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-6 bg-paleBlue shadow-blueLight px-10 py-20 rounded">
              <div className="flex space-x-5">
                <div className="flex flex-col space-y-1">
                  <p className="not-italic font-normal text-sm leading-5 text-lightGray">
                    Name
                  </p>
                  <input
                    className="flex h-[40px] w-[185.42px] items-center text-center rounded border border-textGray bg-transparent"
                    type="text"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <p className="not-italic font-normal text-sm leading-5 text-lightGray">
                    Email
                  </p>
                  <input
                    className="flex h-[40px] w-[185.42px]  items-center text-center rounded border border-textGray bg-transparent" 
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-1">
                <p className="not-italic font-normal text-sm leading-5 text-lightGray">
                  Subject
                </p>
                <input
                  className="w-[391.51px] h-[40px] rounded border border-textGray bg-transparent"
                  type="text"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <p className="not-italic font-normal text-sm leading-5 text-lightGray ">
                  Message
                </p>
                <input
                  className="w-[393.95px] h-[130px] rounded border border-textGray bg-transparent"
                  type="text"
                />
              </div>
              <div>
                <button className="flex-row justify-center items-center py-4 px-36 gap-2.5 rounded font-bold text-base text-center text-gray-100 bg-blueButton">Send message</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
