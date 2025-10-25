import Image from "next/image";

const ProfilePic = () => {
  return (
    <div className="relative w-full aspect-square shadow-md">
      <Image
        src="https://res.cloudinary.com/dkdteb9m5/image/upload/v1731179025/personal%20finance/lj5hjqhmvaeqdsrfcwky.jpg"
        alt="Profile Picture"
        fill
        sizes="(max-width: 768px) 100vw,
               (max-width: 1200px) 50vw,
               33vw"
        className="object-cover w-full h-full inset-0 rounded-t-2xl rounded-bl-2xl "
      />
    </div>
  );
};

export default ProfilePic;
