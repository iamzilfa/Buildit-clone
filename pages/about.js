const About = () => {
  return (
    <div>
      <header>
        <div className="grid grid-cols-2">
          <div>
            <img src="/img/Rectangle 151.png" alt="" />
            <img src="/img/Rectangle 152.png" alt="" />
          </div>
          <div>
            <p>About us</p>
            <h2>Owner and investor with a reputation</h2>
            <p>
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

      <main className="flex flex-col gap-y-20">
        <div className="flex flex-col gap-y-20">
          <div className="flex flex-col items-center">
            <p>Statistics</p>
            <p>Development in numbers</p>
          </div>
          <div className="grid grid-cols-3 ">
            <div className="flex gap-10 items-center">
              <div className="w-16 h-16 bg-gray-600 rounded">
                <img src="/icons/Icon (23).svg" alt="" />
              </div>
              <div>
                <p>200</p>
                <p>Number</p>
              </div>
            </div>
            <div className="flex gap-10 items-center">
              <div className="w-16 h-16 bg-gray-600 rounded">
                <img src="/icons/Icon (24).svg" alt="" />
              </div>
              <div>
                <p>70</p>
                <p>Number</p>
              </div>
            </div>
            <div className="flex gap-10 items-center">
              <div className="w-16 h-16 bg-gray-600 rounded gap-2.5">
                <img src="/icons/Icon (25).svg" alt="" />
              </div>
              <div>
                <p>20</p>
                <p>Number</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-10 border-t-2 border-b-2 py-10">
            <img src="/icons/N.svg" alt="" />
            <img src="/icons/Vecttor.svg" alt="" />
            <img src="/icons/logoups.svg" alt="" />
            <img src="/icons/Veector.svg" alt="" />
            <img src="/icons/Vector.svg" alt="" />
          </div>
        </div>

        <div className="flex flex-col gap-y-20">
          <div className="flex flex-col items-center">
            <p>Our team</p>
            <h2>Let’s meet</h2>
          </div>
          <div className="grid grid-cols-3 items-center justify-center">
            <div>
              <img src="/img/Photo (9).png" alt="" />
              <div>
                <p>Name Surname</p>
                <p>Worker</p>
              </div>
            </div>
            <div>
              <img src="/img/Photo (10).png" alt="" />
              <div>
                <p>Name Surname</p>
                <p>Worker</p>
              </div>
            </div>
            <div>
              <img src="/img/Photo (11).png" alt="" />
              <div>
                <p>Name Surname</p>
                <p>Worker</p>
              </div>
            </div>
            <div>
              <img src="/img/Photo (12).png" alt="" />
              <div>
                <p>Name Surname</p>
                <p>Worker</p>
              </div>
            </div>
            <div>
              <img src="/img/Photo (13).png" alt="" />
              <div>
                <p>Name Surname</p>
                <p>Worker</p>
              </div>
            </div>
            <div>
              <img src="/img/Photo (14).png" alt="" />
              <div>
                <p>Name Surname</p>
                <p>Worker</p>
              </div>
            </div>
            <div>
              <img src="/img/Photo (15).png" alt="" />
              <div>
                <p>Name Surname</p>
                <p>Worker</p>
              </div>
            </div>
            <div>
              <img src="/img/Photo (16).png" alt="" />
              <div>
                <p>Name Surname</p>
                <p>Worker</p>
              </div>
            </div>
            <div>
              <img src="/img/Photo (17).png" alt="" />
              <div>
                <p>Name Surname</p>
                <p>Worker</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-b h-48 mx-28 border-b-gray-600 border-t-gray-600 border-opacity-80">
            <h2 className="not-italic font-bold text-4xl text-gray-700">
              Call us
            </h2>
            <div className="flex items-center gap-5">
              <button className="flex flex-row justify-center items-center py-4 px-12 bg-teal-600 rounded gap-2.5 not-italic font-bold text-base leading-5 text-center text-gray-100">
                Call
              </button>
              <button className="flex flex-row justify-center items-center bg-indigo-200 rounded-sm w-10 h-5 not-italic font-bold text-base leading-5 text-center text-gray-700 gap-2.5 py-4 px-12">
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
