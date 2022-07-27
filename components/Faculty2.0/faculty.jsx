import {FaArrowRight} from 'react-icons/fa';
import Image from 'next/image';

const Faculty = () => {
  return (
    <>
    <div className="mt-8 flex flex-wrap items-center justify-center text-white gap-y-20 gap-x-20">
        <div className="ease-in duration-300 bg-ankit-100 w-[350px] h-[196px] md:h-[200px] shadow-xl shadow-black rounded-xl flex flex-row hover:scale-105 cursor-pointer ">
            <div className="basis-1/2 text-center font-light mt-2">
              <div className="text-2xl lg:mb-2 italic text-stone-900">
                Dean SOET
              </div>
              <div class="text-xs text-center p-x-2 m-3 lg:p-2 lg:m-0 overflow-hidden text-stone-800">
                Mr. Vineet Dhaiya, is a Professor of Computer Science and Engineering at K.R.Mangalam University.
              </div>
              <a href="/faculty/dr-vineet-dahiya"
                class="inline-flex items-center py-1 px-5 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800">
                Know more
                <FaArrowRight className="ml-2 text-xs"/>
              </a>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/static2.0/dr-vineet-dahiya.jpg"
                height={232}
                width={232}
                className="rounded-r-xl"
              />
            </div>
          </div>
        </div>
    </>
    
  );
}
 
export default Faculty;