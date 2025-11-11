import Image from "next/image";

const ServiceCard = () => {
  return (
    <div className="relative w-full rounded-xl overflow-clip group h-[350px]">
      <Image
        src={"/placeholder.jpg"}
        alt={"services title"}
        fill
        className="inset-0 z-0 w-full h-full group-hover:scale-110 duration-300"
      />
      <div className="absolute z-10 bottom-0 left-0 right-0 bg-linear-to-t from-white/60 to-transparent p-4 md:p-8 text-white">
        <h3>title</h3>
        <p>description</p>
      </div>
    </div>
  );
};

export default ServiceCard;
