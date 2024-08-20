import Navbar from "../components/Navbar";
import WelcomePage from "../components/Welcome";
import Services from "../components/Services";
import Transactions from "../components/Transactions";
import Footer from "../components/Footer";
import Dashboard from "./Dashboard";

const Home = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      {/* <Navbar /> */}
      <WelcomePage />
    </div>
    {/* <Services /> */}
    <Transactions />
    {/* <Footer /> */}
    <Dashboard/>
    {/* Hello */}

  </div>
);

export default Home;