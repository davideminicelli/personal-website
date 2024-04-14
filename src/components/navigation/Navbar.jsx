import LanguageDial from "../Buttons/LanguageDial";

const Navbar = () => {
  return (
    <nav className="bg-primary fixed left-0 top-0 hidden w-full md:block">
      <div className="mx-auto flex h-24 w-10/12 max-w-screen-xl items-center text-white">
        <p className="grow-[2]">Davide Minicelli</p>
        <ul className="mx-auto mr-4 flex list-none justify-between gap-4 leading-none">
          <li className="leading-none">Home</li>
          <li className="leading-none">About</li>
          <li className="leading-none">Contact</li>
        </ul>
        <LanguageDial />
      </div>
    </nav>
  );
};

export default Navbar;
