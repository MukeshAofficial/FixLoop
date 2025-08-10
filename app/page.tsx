import Navbar from "@/components/navbar";
import {GlobeDemo} from "@/components/globe";
import CoverDemo from "@/components/hero";


export default function Home(){
  return(
    <main className="p-18">
      <Navbar/>
      <div className="mt-8" >
      <CoverDemo/>
      </div>
      <GlobeDemo />


    </main>
  )
}