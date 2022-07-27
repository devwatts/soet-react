import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className='flex items-center flex-wrap bg-ankit-200 p-1 '>
        {/* <Link href='/'>
        <img
          class="hidden sm:block md:h-16 md:mr-24 md:ml-5 cursor-pointer"
          src="https://www.krmangalam.edu.in/images/KRMULogo_w.svg"
          alt="krmu logo"
        />
        </Link> */}
        <button
          className=' inline-flex p-0.5 hover:bg-blue-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-4 py-0 rounded text-white font-normal items-center justify-center hover:text-red-500'>
                Home
              </a>
            </Link>
            <Link href='/faculty/login'>
              <a className='lg:inline-flex lg:w-auto w-full px-4 py-0 rounded text-white font-normal items-center justify-center hover:text-red-500'>
                Login
              </a>
            </Link>
            <Link href='/faculty/register'>
              <a className='lg:inline-flex lg:w-auto lg:mr-16 w-full px-4 py-0 rounded text-white font-normal items-center justify-center hover:text-red-500'>
                Register
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;