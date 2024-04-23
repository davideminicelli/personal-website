const Burger = ({ isOpen, setIsOpen, ...props }) => {
  return (
    <div
      className={`cursor-pointer ${isOpen ? "bg-primary" : "bg-white"} flex h-14 w-14 items-center justify-center pl-4 pr-2`}
      onClick={() => setIsOpen(isOpen ? false : true)}
    >
      <div className={`relative h-6 w-8`}>
        <div
          className={`burgerLine absolute top-0 ${isOpen ? "bg-white opacity-0" : "bg-primary"}`}
        />
        <div
          className={`burgerLine absolute top-1/2 -translate-y-1/2 transform ${isOpen ? "rotate-45 bg-white" : "bg-primary"}`}
        />
        <div
          className={`burgerLine absolute top-1/2 -translate-y-1/2 transform ${isOpen ? "-rotate-45 bg-white" : "bg-primary"}`}
        />
        <div
          className={`burgerLine absolute bottom-0 ${isOpen ? "bg-white opacity-0" : "bg-primary"}`}
        />
      </div>
    </div>
  );
};

export default Burger;
