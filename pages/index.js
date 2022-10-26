import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header>
        <div className="grid grid-cols-2 items-center">
          <div>
            <div>
              <h1>Development company</h1>
              <h2>
                Forward-thinking real estate developer, owner and investor with
                a reputation
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <button className="w-32 h-16 bg-teal-600 not-italic font-bold text-base leading-5 text-center text-gray-100 rounded">
                Service
              </button>
              <button className="h-16 bg-indigo-200 rounded not-italic font-bold text-base leading-5  items-center text-center text-gray-700 w-64">
                About the company
              </button>
            </div>
          </div>
          <div className="grid grid-cols-3">
            <img src="/img/konoshi.png" alt="" />
            <img src="/img/tradecenter.png" alt="" />
            <img src="/img/chateau.png" alt="" />
            <img src="/img/blackbuilding.png" alt="" />
            <img src="img/whitebuilding.png" alt="" />
          </div>
        </div>
      </header>

      <main className="flex flex-col gap-y-48">
        <div>
          <h2>Innovative Execution</h2>
          <div className="grid grid-cols-3">
            <div>
              <div className="flex flex-row justify-center items-center p-2 w-16 h-16 bg-[#678C92] gap-1">
                <img src="icons/Icon (17).svg" alt="" />
              </div>
              <h2>Featured Listing</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
            <div>
              <div className="flex flex-row justify-center items-center p-2 w-16 h-16 bg-[#678C92] gap-1">
                <img src="icons/Icon (18).svg" alt="" />
              </div>
              <h2>Available Properties</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
            <div>
              <div className="flex flex-row justify-center items-center p-2 w-16 h-16 bg-[#678C92] gap-2">
                <img src="icons/Icon (19).svg" alt="" />
              </div>
              <h2>In the News</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-20">
          <div className="flex items-center justify-center space-x-10 border-t-2 border-b-2 py-10">
            <img src="/icons/N.svg" alt="" />
            <img src="/icons/Vecttor.svg" alt="" />
            <img src="/icons/logoups.svg" alt="" />
            <img src="/icons/Veector.svg" alt="" />
            <img src="/icons/Vector.svg" alt="" />
          </div>
          <div>
            <div className="grid grid-cols-2">
              <img src="/img/Фото.png" alt="" />
              <div>
                <h3>About us</h3>
                <h2>Owner and investor with a reputation</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  elit sem, vestibulum sed leo eu, malesuada pharetra mauris.
                  Integer rhoncus, eros vel euismod tempor, ipsum magna
                  tristique nisi, quis ullamcorper enim magna eu orci. Sed
                  semper ex quis semper aliquet. Cras hendrerit molestie sapien
                  sed fermentum. Mauris dui tortor, viverra vel ultrices in,
                  congue sed ex.
                </p>
                <button className="flex flex-row justify-center items-center p-0 w-48 h-12 bg-teal-600 not-italic font-bold text-base leading-5 text-center text-gray-100 rounded">
                  Explore
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2">
          <div>
            <h3>Available Properties</h3>
            <h2>Featured Listing</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit
              sem, vestibulum sed leo eu, malesuada pharetra mauris. Integer
              rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, quis
              ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet.
              Cras hendrerit molestie sapien sed fermentum. Mauris dui tortor,
              viverra vel ultrices in, congue sed ex.
            </p>
            <button className="flex flex-row justify-center items-center p-0 w-48 h-12 bg-teal-600 not-italic font-bold text-base leading-5 text-center text-gray-100 rounded">
              Explore
            </button>
          </div>
          <div className="grid grid-cols-2">
            <img src="img/Photo.png" alt="" />
            <img src="img/Photo (1).png" alt="" />
            <img src="img/Photo (2).png" alt="" />
            <img src="img/Photo (3).png" alt="" />
          </div>
        </div>

        <div>
          <p>Socials</p>
          <h2>On Instagram</h2>
          <div className="grid grid-cols-3">
            <img src="/img/Card.png" alt="" />
            <img src="/img/Photo (4).png" alt="" />
            <img src="/img/Photo (5).png" alt="" />
            <img src="/img/Photo (6).png" alt="" />
            <img src="/img/Photo (7).png" alt="" />
            <img src="/img/Photo (8).png" alt="" />
          </div>
        </div>

        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-y-32">
            <div>
              <p>Contact</p>
              <h2>Get In Touch</h2>
            </div>
            <div className="flex flex-col gap-y-7">
              <div className="flex space-x-5">
                <div className="gap-2.5 flex flex-row items-start p-5 bg-gray-300 rounded">
                  <img src="/icons/Icon (20).svg" alt="" />
                </div>
                <div>
                  <p>Tel</p>
                  <p>708-790-0000</p>
                </div>
              </div>
              <div className="flex space-x-5">
                <div className="gap-2.5 flex flex-row items-start p-5 bg-gray-300 rounded">
                  <img src="/icons/Icon (21).svg" alt="" />
                </div>
                <div>
                  <p>Email</p>
                  <p>sales@buildit.site</p>
                </div>
              </div>
              <div className="flex space-x-5">
                <div className="gap-2.5 flex flex-row items-start p-5 bg-gray-300 rounded">
                  <img src="/icons/Icon (21).svg" alt="" />
                </div>
                <div>
                  <p>Office</p>
                  <p>60 Manor Station St. Fairport, NY 14450</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-6">
            <div className="flex space-x-5">
              <div>
                <p className="not-italic font-normal text-sm leading-5 text-gray-600">
                  Name
                </p>
                <input
                  className="flex h-[40px] w-[185.42px] items-center text-center rounded-sm border border-gray-700"
                  type="text"
                />
              </div>
              <div>
                <p className="not-italic font-normal text-sm leading-5 text-gray-600">
                  Email
                </p>
                <input
                  className="flex h-[40px] w-[185.42px]  items-center text-center rounded-sm border border-gray-700"
                  type="text"
                />
              </div>
            </div>
            <div>
              <p className="not-italic font-normal text-sm leading-5 text-gray-600">
                Subject
              </p>
              <input
                className="w-[391.51px] h-[40px] rounded-sm border border-gray-700"
                type="text"
              />
            </div>
            <div>
              <p className="not-italic font-normal text-sm leading-5 text-gray-600">
                Message
              </p>
              <input
                className="w-[393.95px] h-[130px] rounded-sm border border-gray-700"
                type="text"
              />
            </div>
            <div></div>
          </div>
        </div>
      </main>
    </div>
  );
}
