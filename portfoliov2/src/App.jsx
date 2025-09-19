import { About } from "./component/about/About";
import { Banner } from "./component/banner/Banner";
import { Contact } from "./component/contact/Contact";
import { Footer } from "./component/footer/Footer";
import { Navbar } from "./component/navbar/Navbar";
import { RecentWork } from "./component/recentwork/RecentWork";

function App() {
  return (
    <>
      <Navbar />

      <Banner />
      <About />
      <RecentWork />
      <Contact />

      <Footer />
    </>
  );
}

export default App;
