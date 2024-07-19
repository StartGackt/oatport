import { RiReactjsFill } from "react-icons/ri";
import { FaPhp } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiGeopandas } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { DiPostgresql } from "react-icons/di";
import { SiMysql } from "react-icons/si";

const Tech = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div 
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsFill className="text-7xl text-blue-400" /> {/* React is blue */}
        </div>
        <div
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaPhp className="text-7xl text-purple-400" /> {/* PHP is purple */}
        </div>
        <div
         
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaBootstrap className="text-7xl text-purple-400" /> {/* Bootstrap is purple */}
        </div>
        <div
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-7xl text-green-400" /> {/* MongoDB is green */}
        </div>
        <div 
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiGeopandas className="text-7xl text-orange-400" /> {/* Geopandas is orange */}
        </div>
        <div 
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiPostgresql className="text-7xl text-blue-400" /> {/* PostgreSQL is blue */}
        </div>
        <div 
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMysql className="text-7xl text-orange-400" /> {/* MySQL is orange */}
        </div>
        <div 
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaPython className="text-7xl text-yellow-400" /> {/* Python is yellow */}
        </div>
      </div>
    </div>
  );
};

export default Tech;