import Image from "next/image";
import Slider from "./_components/Slider/Slider";
import About from "./_components/About/About";
import Packages from "./_components/Packages/Packages";
import Help from "./_components/Help/Help";
import Modem from "./_components/Modem/Modem";
import Customers from "./_components/Customers/Customers";
import Contact from "./_components/Contact/Contact";

export default function Home() {
  return (
    <>
    <Slider />
    <About />
    <Packages />
    <Modem />
    <Help />
    <Customers />
    <Contact />
    </>
  );
}
