"use client";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const App = () => {
  const codeString = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Responsive Navbar Example</title>
      <!-- Add Tailwind CSS CDN -->
      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  </head>
  <body>
      <nav class="bg-blue-500 p-4">
          <div class="container mx-auto flex flex-col sm:flex-row justify-between items-center">
              <a href="#" class="text-white text-2xl font-bold mb-4 sm:mb-0">Your Logo</a>
              <ul class="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                  <li><a href="#" class="text-white">Home</a></li>
                  <li><a href="#" class="text-white">About</a></li>
                  <li><a href="#" class="text-white">Services</a></li>
                  <li><a href="#" class="text-white">Contact</a></li>
              </ul>
          </div>
      </nav>
      <!-- Your content goes here -->
  </body>
  </html>
  `;

  const [copy, setCopy] = useState(false);

  return (
    <>
      <div className="mx-auto max-w-4xl  space-y-8  pt-20  lg:py-8 ">
        <h1 className="text-xl font-bold text-[#79869c] dark:text-[white]">
          CyberSecurity
        </h1>
        <p className="text-[#79869c]">
          Cybersecurity is a vast and complex field that encompasses various
          aspects, and code related to cybersecurity can be extensive and
          diverse. I can provide you with a simple example of a Python script
          that generates a strong random password, which is one aspect of
          cybersecurity. 
        </p>
        <div className="my-8">
          <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex flex-col items-center justify-between sm:flex-row">
              <a
                href="#"
                className="mb-4 text-2xl font-bold text-[white] sm:mb-0"
              >
                Your Logo
              </a>
              <ul className="flex flex-col space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
                <li>
                  <a href="#" className="text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className=" max-lg:mx-3">
          <div className="max-h-[500px]  max-w-3xl min-w-[16rem] rounded-md overflow-y-scroll">
            <div className="sticky top-0 flex justify-between px-4 dark:bg-slate-950 bg-gray-300 text-[#79869c] dark:text-[#79869c] text-xs items-center">
              <p className="text-sm">Example code</p>

              {copy ? (
                <button className="py-1 inline-flex items-center gap-1">
                  <span className="text-base mt-1">
                    {/* <ion-icon name="checkmark"></ion-icon> */}
                  </span>
                  Copied!
                </button>
              ) : (
                <button
                  className="py-1 inline-flex items-center gap-1"
                  onClick={() => {
                    navigator.clipboard.writeText(codeString);
                    setCopy(true);
                    setTimeout(() => {
                      setCopy(false);
                    }, 3000);
                  }}
                >
                  <span className="text-base mt-1">
                    {/* <ion-icon name="clipboard"></ion-icon> */}
                  </span>
                  Copy code
                </button>
              )}
            </div>

            <SyntaxHighlighter
              language="html"
              style={atomOneDark}
              customStyle={{
                padding: "20px",
              }}
              wrapLongLines={true}
            >
              {codeString}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
