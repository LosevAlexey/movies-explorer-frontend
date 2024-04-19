import AboutMe from './AboutMe/AboutMe';
import AboutProject from './AboutProject/AboutProject';
import NavTab from './NavTab/NavTab';
import Promo from './Promo/Promo';
import Techs from './Techs/Techs';
import Portfolio from './Portfolio/Portfolio';
import "./Main.css"

function Main() {
  return (
    <>
      <main className="main">
      {/* <Header /> */}
        <Promo />
        <NavTab />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
        {/* <Footer /> */}
      </main>

    </>
  );
}

export default Main;
