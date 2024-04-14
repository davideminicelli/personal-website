const Burger = ({ isOpen, setIsOpen, ...props }) => {
  return (
    <div
      className={`cursor-pointer ${isOpen ? "bg-primary" : "bg-white"} flex h-14 w-14 items-center justify-center rounded-full`}
      onClick={() => setIsOpen(isOpen ? false : true)}
    >
      <div className={`relative h-6 w-8`}>
        <div
          className={`burgerLine line1 ${isOpen ? "line1Trans bg-white" : "bg-primary"}`}
        />
        <div
          className={`burgerLine line2 ${isOpen ? "line2Trans bg-white" : "bg-primary"}`}
        />
        <div
          className={`burgerLine line2 ${isOpen ? "line2TransRev bg-white" : "bg-primary"}`}
        />
        <div
          className={`burgerLine line3 ${isOpen ? "line3Trans bg-white" : "bg-primary"}`}
        />
      </div>
    </div>
  );
};

export default Burger;
