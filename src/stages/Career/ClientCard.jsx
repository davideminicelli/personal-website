import Image from "next/image";

const ClientCard = ({ url, label }) => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={url}
        alt={label}
        width={400}
        height={225}
        className="rounded-xl"
      />
      <p className="mt-2 text-xl">{label}</p>
    </div>
  );
};

export default ClientCard;
