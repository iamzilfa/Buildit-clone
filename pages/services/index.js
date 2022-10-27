import Link from "next/link";

const Services = () => {
  return (
    <div className="text-center flex flex-col items-center space-y-5">
      <h1 className="text-7xl font-bold">Oops...</h1>
      <p className="font-semibold text-2xl">Under Construction</p>
      <p>
        Go back to the{" "}
        <Link href="/" className="text-[#4979ff] underline">
          Homepage
        </Link>
      </p>
    </div>
  );
};

export default Services;
