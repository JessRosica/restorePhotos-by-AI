import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import SquigglyLines from "../components/SquigglyLines";

const Home: NextPage = () => {
  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>ali</title>
      </Head>

      
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-28 mt-20">
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          className="border rounded-2xl py-1 px-4 text-slate-500 text-sm mb-5 hover:scale-105 transition duration-300 ease-in-out"
        >
          This project is only for <span className="font-semibold"> prototype </span>. It is <span className="font-semibold">prohibited</span> to use for any business without my permission. 
        </a>
        <a
          href="mailto:hi@aliahad.com"
          target="_blank"
          rel="noreferrer"
          className="border rounded-2xl py-1 px-4 text-slate-500 text-sm mb-5 hover:scale-105 transition duration-300 ease-in-out"
        >
          for any feedback or improvement or idea? email me at : <span className="font-semibold">hi@aliahad.com</span>
        </a>
        
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-slate-900 sm:text-7xl">
          Project: Restoring old / blurry photos using AI
        </h1>

        
        <Link
          className="bg-black rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-black/80"
          href="/restore"
        >
          Restore your photos &rarr;
        </Link>
        <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
          <div className="flex flex-col space-y-10 mt-4 mb-16">
            <div className="flex sm:space-x-2 sm:flex-row flex-col">
              <div>
                <h2 className="mb-1 font-medium text-lg">Original Photo</h2>
                <Image
                  alt="Original photo of my bro"
                  src="/a.jpg"
                  className="w-96 h-100 rounded-2xl"
                  width={400}
                  height={400}
                />
              </div>
              <div className="sm:mt-0 mt-8">
                <h2 className="mb-1 font-medium text-lg">Restored Photo</h2>
                <Image
                  alt="Restored photo of my bro"
                  width={400}
                  height={400}
                  src="/a-new.jpg"
                  className="w-96 h-100 rounded-2xl sm:mt-0 mt-2"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      
    </div>
  );
};

export default Home;
