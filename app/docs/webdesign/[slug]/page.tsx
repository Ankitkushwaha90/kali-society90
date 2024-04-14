"use client"
import { getBlog } from "@/sanity/sanity-utils";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

type Props = {
  params: { slug: string }
}

async function Webdesignss({ params }: Props){
  const Webdesigns = await getBlog(params.slug);
  console.log(Webdesigns);

  return(
    <>
     <div className="mx-auto max-w-4xl  space-y-8  pt-20  lg:py-8 ">
        <h1 className="text-xl font-bold text-[#79869c] dark:text-[white]">
          {Webdesigns.title}
        </h1>
        <p className="text-[#79869c]">
          {Webdesigns.code} 
        </p>
        

        <div className=" max-lg:mx-3">
          <div className="max-h-[500px]  max-w-3xl min-w-[16rem] rounded-md overflow-y-scroll">
            

            <SyntaxHighlighter
              language="html"
              style={atomOneDark}
              customStyle={{
                padding: "20px",
              }}
              wrapLongLines={true}
            >
              {Webdesigns.code}
              {/* {codeString} */}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </>
  )
}






export default async function Webdesigns({ params }: Props) {
  const Webdesigns = await getBlog(params.slug);

  return (
    <div>
      <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold">{Webdesigns.title}</h1>
      <div className="text-lg text-gray-700 mt-10">
  
          <h1>{Webdesigns.title5}</h1>
          <Webdesignss params={params}/>
        
      </div>
    </div>
  )
}

