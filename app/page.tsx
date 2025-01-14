import Image from "next/image";
import Nav from "./components/nav";
import HomeComponent from "./components/home";

export default function Home() {
  return (
    <div className="">
      <Nav />
      <main className="w-full">
        <HomeComponent />
      </main>
    </div>
  );
}
