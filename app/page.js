import { Footer, Navbar } from '../components';
import { About, GetStarted } from '../sections';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <div className="relative">
      <About />
    </div>
    <div className="relative">
      <GetStarted />
    </div>
    <Footer />
  </div>
);

export default Page;
