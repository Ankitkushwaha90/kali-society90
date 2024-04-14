"use client"
import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const tryapp = async() => {
    return(
        <>
            <h1>hello async</h1>
        </>
    )
}

const Hellodata = () => {
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
    
    <div className=" max-lg:mx-3">

      <div className='max-h-[500px]  max-w-3xl min-w-[16rem] rounded-md overflow-y-scroll'>
        <div className='sticky top-0 flex justify-between px-4 dark:bg-slate-950 bg-gray-300 text-[#79869c] dark:text-[#79869c] text-xs items-center'>
          <p className="text-sm">Example code</p>

          {copy ? (
              <button className="py-1 inline-flex items-center gap-1">
                
              <span className="text-base mt-1">
            {/* <ion-icon name="checkmark"></ion-icon> */}
              </span>
              Copied!
            </button>
          ) : (
            <button className="py-1 inline-flex items-center gap-1"
            onClick={() =>{
              navigator.clipboard.writeText(codeString);
              setCopy(true)
              setTimeout(() => {
                  setCopy(false); 
              }, 3000)
            }}          
            >
            <span className="text-base mt-1">
            {/* <ion-icon name="clipboard"></ion-icon> */}
            </span>
            Copy code
          </button>
          ) }
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

</>
  );

}

export default Hellodata;