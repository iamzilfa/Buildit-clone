import { library } from '@fortawesome/fontawesome-svg-core';

// import your icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faChevronRight } from '@fortawesome/free-solid-svg-icons';



const About = () => {
  return (
    <div className="">
      <header className="bg-newColor pt-60 pb-48">
        <div className="grid grid-cols-2 items-center">
          <div className="flex items-center justify-center relative">
            <div>
              <img src="/img/Rectangle 152.png" alt="" />
            </div>
            <div className="absolute bottom-0 translate-x-[50%] translate-y-[25%]">
              <img src="/img/Rectangle 151.png" alt="" />
            </div>
          </div>
          <div className="flex flex-col space-y-7 pr-32">
            <p className="not-italic font-medium text-base leading-8 text-teal-400">
              About us
            </p>
            <h2 className="not-italic font-bold text-4xl text-textGray">
              Owner and investor with a reputation
            </h2>
            <p className="not-italic font-medium text-base leading-8 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit
              sem, vestibulum sed leo eu, malesuada pharetra mauris. Integer
              rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, quis
              ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet.
              Cras hendrerit molestie sapien sed fermentum. Mauris dui tortor,
              viverra vel ultrices in, congue sed ex.
            </p>
          </div>
        </div>
      </header>

      <main>
        <div className="flex flex-col gap-y-20 bg-aliceBlue pt-40 py-32">
          <div className="flex flex-col gap-y-40">
            <div className="flex flex-col items-center space-y-5">
              <p className="not-italic font-medium text-base leading-8 text-center text-teal-400">
                Statistics
              </p>
              <p className="not-italic font-bold text-4xl text-center text-textGray">
                Development in numbers
              </p>
            </div>
            <div className="flex flex-col space-y-14">
              <div className="flex items-center justify-center space-x-32 bg-aboutBlue mx-40 py-12 px-20 shadow-blueLight">
                <div className="flex gap-10 items-center">
                  <div className="w-16 h-16 bg-lightGray rounded">
                    <img src="/icons/Icon (23).svg" alt="" />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <p className="font-bold text-4xl text-textGray flex items-center ga0-2"> <FontAwesomeIcon icon={faChevronRight} /> 200</p>
                    <p className="font-bold text-base leading-5 tracking-widest text-lightGray">
                      Number
                    </p>
                  </div>
                </div>
                <div className="flex gap-10 items-center border border-l-textGray pl-14">
                  <div className="w-16 h-16 bg-lightGray rounded">
                    <img src="/icons/Icon (24).svg" alt="" />
                  </div>
                  <div className="flex flex-col space-y-1">
                  <p className="font-bold text-4xl text-textGray flex items-center ga0-2"> <FontAwesomeIcon icon={faChevronRight} /> 70</p>
                    <p className="font-bold text-base leading-5 tracking-widest text-lightGray">
                      Number
                    </p>
                  </div>
                </div>
                <div className="flex gap-10 items-center border border-l-textGray pl-14">
                  <div className="w-16 h-16 bg-lightGray rounded gap-2.5">
                    <img src="/icons/Icon (25).svg" alt="" />
                  </div>
                  <div className="flex flex-col space-y-1">
                  <p className="font-bold text-4xl text-textGray flex items-center ga0-2"> <FontAwesomeIcon icon={faChevronRight} /> 20</p>
                    <p className="font-bold text-base leading-5 tracking-widest text-lightGray">
                      Number
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-10 border-t border-t-lightGray border-b border-b-lightGray py-10 mx-20">
                <img src="/icons/N.svg" alt="" />
                <img src="/icons/Vecttor.svg" alt="" />
                <img src="/icons/logoups.svg" alt="" />
                <img src="/icons/Veector.svg" alt="" />
                <img src="/icons/Vector.svg" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-20 bg-paleBlue py-24">
          <div className="flex flex-col items-center space-y-3">
            <p className="font-medium text-base leading-8 text-center text-teal-400">
              Our team
            </p>
            <h2 className="not-italic font-bold text-4xl text-center text-textGray">
              Let’s meet
            </h2>
          </div>
          <div className="flex flex-col space-y-10">
            <div className="flex justify-center items-center space-x-10">
              <div className="bg-aboutBlue rounded shadow-blueLight">
                <img src="/img/Photo (9).png" alt="" />
                <div className="py-4 pl-4">
                  <p className="font-bold text-base leading-5 flex items-center text-textGray">Name Surname</p>
                  <p className="font-medium text-base leading-8 flex items-center text-lightGray">Worker</p>
                </div>
              </div>
              <div className="bg-aboutBlue rounded shadow-blueLight">
                <img src="/img/Photo (10).png" alt="" />
                <div className="py-4 pl-4">
                  <p className="font-bold text-base leading-5 flex items-center text-textGray">Name Surname</p>
                  <p className="font-medium text-base leading-8 flex items-center text-lightGray">Worker</p>
                </div>
              </div>
              <div className="bg-aboutBlue rounded shadow-blueLight">
                <img src="/img/Photo (11).png" alt="" />
                <div className="py-4 pl-4">
                  <p className="font-bold text-base leading-5 flex items-center text-textGray">Name Surname</p>
                  <p className="font-medium text-base leading-8 flex items-center text-lightGray">Worker</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center space-x-10">
              <div className="bg-aboutBlue rounded shadow-blueLight">
                <img src="/img/Photo (12).png" alt="" />
                <div className="py-4 pl-4">
                  <p className="font-bold text-base leading-5 flex items-center text-textGray">Name Surname</p>
                  <p className="font-medium text-base leading-8 flex items-center text-lightGray">Worker</p>
                </div>
              </div>
              <div className="bg-aboutBlue rounded shadow-blueLight">
                <img src="/img/Photo (13).png" alt="" />
                <div className="py-4 pl-4">
                  <p className="font-bold text-base leading-5 flex items-center text-textGray">Name Surname</p>
                  <p className="font-medium text-base leading-8 flex items-center text-lightGray">Worker</p>
                </div>
              </div>
              <div className="bg-aboutBlue rounded shadow-blueLight">
                <img src="/img/Photo (14).png" alt="" />
                <div className="py-4 pl-4">
                  <p className="font-bold text-base leading-5 flex items-center text-textGray">Name Surname</p>
                  <p className="font-medium text-base leading-8 flex items-center text-lightGray">Worker</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center space-x-10">
              <div className="bg-aboutBlue rounded shadow-blueLight">
                <img src="/img/Photo (15).png" alt="" />
                <div className="py-4 pl-4">
                  <p className="font-bold text-base leading-5 flex items-center text-textGray">Name Surname</p>
                  <p className="font-medium text-base leading-8 flex items-center text-lightGray">Worker</p>
                </div>
              </div>
              <div className="bg-aboutBlue rounded shadow-blueLight">
                <img src="/img/Photo (16).png" alt="" />
                <div className="py-4 pl-4">
                  <p className="font-bold text-base leading-5 flex items-center text-textGray">Name Surname</p>
                  <p className="font-medium text-base leading-8 flex items-center text-lightGray">Worker</p>
                </div>
              </div>
              <div className="bg-aboutBlue rounded shadow-blueLight">
                <img src="/img/Photo (17).png" alt="" />
                <div className="py-4 pl-4">
                  <p className="font-bold text-base leading-5 flex items-center text-textGray">Name Surname</p>
                  <p className="font-medium text-base leading-8 flex items-center text-lightGray">Worker</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-b h-48 mx-28 border-b-gray-600 border-t-gray-600 border-opacity-80">
            <h2 className="not-italic font-bold text-4xl text-textGray">
              Call us
            </h2>
            <div className="flex items-center gap-5">
              <button className="flex flex-row justify-center items-center py-4 px-28 bg-blueButton rounded gap-2.5 not-italic font-bold text-base leading-5 text-center text-gray-100">
                Call
              </button>
              <button className="flex flex-row justify-center items-center bg-lightBlue rounded-sm px-16 not-italic font-bold text-base leading-5 text-center text-textGray gap-2.5 py-4">
                Email
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
