import profile from "../../images/profile.png";
const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 mx-4 border-b-2">
      <h1 className="md:text-3xl text-xl font-bold">knowledge - Cafe</h1>
      <img src={profile} alt="" />
    </header>
  );
};

export default Header;
