import Link from 'next/link';
import Image from 'next/image';


export default function Footer(){
    return(
        <div className='w-100 mt-[50px] bg-[#3e3e3e] border-t-[8px] border-[#ed3237] h-fit'>
          <div className='flex flex-col text-white w-100 justify-around mt-[40px] md:flex-row'>
              <div className='flex w-[90%] self-center flex-col text-[14px] md:w-[45%]'>
                  <Image src="/static/images/logo.png" height={'100px'} width={'100px'} layout={'fixed'}/>
                  <Link href={'#'}><a className='mt-[10px] mb-[10px] text-[#91d8f7] font-bold text-[17px]'>Academics</a></Link>
                  <Link href={'#'}><a className='mt-[10px] mb-[10px] text-[#91d8f7] font-bold text-[17px]'>Admissions</a></Link>
                  <Link href={'#'}><a className='mt-[10px] mb-[10px] text-[#91d8f7] font-bold text-[17px]'>Faculty</a></Link>
                  <Link href={'#'}><a className='mt-[10px] mb-[10px] text-[#91d8f7] font-bold text-[17px]'>Examination</a></Link>
                  <Link href={'#'}><a className='mt-[10px] mb-[10px] text-[#91d8f7] font-bold text-[17px]'>About SOET</a></Link>
                  <div className='mt-[10px] mb-[20px] flex flex-col w-100'>
                    <Link href={'#'}><a className='w-[100%] mt-[5px] text-[13px]'>Email: <br></br>welcome@krmangalam.edu.in</a></Link>
                    <Link href={'#'}><a className='w-[100%] mt-[5px] text-[13px]'>Number: <br></br>01148884888, 8800697010,8800697015</a></Link>
                    <Link href={'#'}><a className='w-[100%] mt-[5px] text-[13px]'>Location: <br></br>Sohna Road, Gurugram,</a></Link>
                  </div>
              </div>
              <div className='flex flex-col w-[90%] self-center justify-center flex-wrap text-[14px] border-t-[8px] border-[#ed3237] md:w-[45%]'>
                <span className='mt-[30px] mb-[10px] text-center text-[#91d8f7] font-bold text-[17px]'>SUBSCRIBE TO UPDATES</span>
                    <div className='flex mt-[10px] mb-[30px] bg-[#fff] p-[20px] w-fit self-center	'>
                       <form action='/' className="w-full max-w-sm">
                            <div class="flex items-center border-b border-[#ed3237] py-2">
                              <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Email Address" aria-label="Full name"/>
                              <button class="flex-shrink-0 bg-[#ed3237] border-[#ed3237] text-sm border-4 text-white py-1 px-2 rounded" type="submit">
                                Sign Up
                              </button>
                            </div>
                        </form>
                    </div>
              </div>
              
          </div>
      </div>
    )
}