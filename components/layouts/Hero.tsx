

import Link from 'next/link';
import hero from '../../public/data/hero.json'
import me from '../../public/images/me.png'
import Image from "next/image"

export const Hero = () => {
  return (
    <div className=" w-full px-24 md:py-32 lg:px-24 my-20">
        <div className="md:mt-14 lg:-mt-5 flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="">
              <h1 className="text-5xl text-center font-bold md:text-start">{hero.title} </h1>
              <p className='mt-3'> {hero.intro} </p>
          </div>
          <div className="md:w-1/3">
              <Image alt="Me" src={me} width={250} height={250} className="" />
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 my-5">
          <Link href="#contact" className='text-white bg-black dark:bg-white dark:text-black p-3 rounded-md font-bold'>Contact Me</Link>
        </div>

        
            
            
    </div>
  );
};


