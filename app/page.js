"use client";
import Link from "next/link";
import localFont from "next/font/local";
import Typewriter from "typewriter-effect";

// Custom font
const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "900",
});

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[90vh]">
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-4 items-start justify-center px-6 md:px-24 py-10">
          <p className={`text-2xl sm:text-3xl md:text-4xl ${poppins.className}`}>
            The Best URL shortener in the Market
          </p>

          <p className="text-gray-600 text-sm sm:text-base">
            We are the most straightforward URL Shortener in the world. Most of the URL shorteners will track you or ask you for login details. We understand your needs — that’s why we built this privacy-focused tool.
          </p>

          <h1 className="text-md sm:text-lg text-gray-800 font-mono">
            <Typewriter
              options={{
                strings: ["Privacy-focused", "Fast", "Secure", "Reliable"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-4 w-full sm:w-auto">
            <Link href="/shorten" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-blue-500 rounded-lg shadow px-4 py-2 text-white hover:bg-blue-600 transition-all duration-300">
                Try Now
              </button>
            </Link>
            <Link target="_blank" href="/github" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-white border border-black rounded-lg shadow px-4 py-2 text-black hover:bg-gray-100 transition-all duration-300">
                GitHub
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center items-center p-4">
          <img
             className="mix-blend-darken h-[90%] w-[90%] sm:h-[70%] sm:w-[100%]"
            alt="An image of a vector"
            src="/vector.jpg"
          />
        </div>
      </section>
    </main>
  );
}
