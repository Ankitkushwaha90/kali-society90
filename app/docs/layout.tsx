import Script from "next/script"
import { RightNavbar } from "../components/right"
import { GlobalNav } from "../components/subnavbar/global-nav"
import {AccordionDemo} from '@/app/components/subnavbar/subnavdata'
export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
      <GlobalNav />
      <div className="dark:bg-[#020420] lg:pl-72">
            <div className=" mb-0 py-16 xl:flex">

            {/* center div */}

              <div className="mx-auto max-w-4xl  space-y-8 px-3 pt-20 lg:px-8 lg:py-8 xl:w-2/3">
               {children}
              </div>
  
              {/* right div */}
  
              <div className="xl:w-1/3  ">
                <RightNavbar />
              </div>
            </div>
          </div>
          <Script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></Script>
<Script  src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></Script>
      </>
      )
  }