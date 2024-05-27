import Image from "next/image";

const ClientCard = ({ url, label }) => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={url}
        alt={label}
        width={400}
        height={225}
        className="client-card rounded-xl shadow-primary"
      />
      <p className="font-heading mt-4 text-xl">{label}</p>
    </div>
  );
};

export default ClientCard;
