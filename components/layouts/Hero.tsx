

import hero from '../../public/data/hero.json'
import me from '../../public/images/me.png'
import Image from "next/image"

export const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center w-full ">
        <div className="md:w-2/3">
            <h1 className="text-5xl text-center font-bold md:text-start">{hero.title} </h1>
            <p> {hero.intro} </p>
        </div>
        <div className="md:w-1/3">
            <Image alt="Me" src={me} width={250} height={250} className="" />
        </div>
            
            
    </div>
  );
};


