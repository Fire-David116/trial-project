import Image from "next/image";
import Navbar from "./components/Navbar";
import TitleDiv from "./components/Title";
export default function Home() {
  return (
    <div class="bg-black">
    <Navbar></Navbar>
    <TitleDiv />
    </div>
  );
}
