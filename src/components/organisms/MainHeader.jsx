import Logo from "../molecules/header/Logo";
import MainMenu from "../molecules/header/MainMenu";

function MainHeader() {
  return (
    <div>
      <div className="fixed bg-gradient w-full z-10">
        <div className="w-full m-auto flex items-center lg:max-w-200">
          <Logo />
          <MainMenu />
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
