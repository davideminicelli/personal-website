const ContactsBurger = ({ isOpen, setIsOpen, ...props }) => {
  return (
    <div
      className={`cursor-pointer ${isOpen ? "bg-white" : "bg-primary"} flex h-14 w-14 items-center justify-center rounded-full`}
      onClick={() => setIsOpen(isOpen ? false : true)}
    >
      <div className={`relative h-6 w-8`}>
        <div
          className={`burgerLine absolute left-0 top-1/2 -translate-y-1/2 ${isOpen ? "w-full rotate-45 bg-primary" : "-translate-x-1/2 -rotate-90 scale-x-75 bg-white"}`}
        />
        <div
          className={`burgerLine absolute top-0 ${isOpen ? "bg-primary opacity-0" : "bg-white"}`}
        />

        <div
          className={`burgerLine absolute top-1/2 ${isOpen ? "-translate-y-1/2 rotate-45 bg-primary opacity-0" : "-translate-x-1/4 -translate-y-3/4 rotate-45 scale-50 bg-white"}`}
        />
        <div
          className={`burgerLine absolute top-1/2 ${isOpen ? "-translate-y-1/2 -rotate-45 bg-primary opacity-0" : "-translate-y-3/4 translate-x-1/4 -rotate-45 scale-50 bg-white"}`}
        />

        <div
          className={`burgerLine absolute bottom-0 ${isOpen ? "bg-primary opacity-0" : "bg-white"}`}
        />
        <div
          className={`burgerLine absolute left-0 top-1/2 -translate-y-1/2 ${isOpen ? "w-full -rotate-45 bg-primary" : "translate-x-1/2 -rotate-90 scale-x-75 bg-white"}`}
        />
      </div>
    </div>
  );
};

export default ContactsBurger;
