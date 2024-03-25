import Image from "next/image";

export const metadata = {
  title: "Practice Next js || Home Page",
  description: "This is our Home page",
};


export default function Home() {
  return (
    <div>
      <h2 className="text-3xl">Home Page</h2>
      <div className="mt-10">
        This is the home page content
      </div>
    </div>
  );
}
