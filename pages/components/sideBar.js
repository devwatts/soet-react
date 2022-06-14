import Link from 'next/link'
import Image from 'next/image'

export default function SideBar(props){

    return(
        <div className={`fixed z-[100] bg-[white] right-[0px] w-${props.status?'[180px]':'0'} h-[100vh] transition-all`}>
            <div className='p-[30px]'>
                <div className='flex justify-end'>
                    <button onClick={() => {props.sideBarToggle(false)}}><Image src={'/static/images/close-x.png'}  width={'30px'} height={'30px'}></Image></button>
                </div>
                <div className='flex flex-col'>
                    <Link href={'#'}><a className='mt-[20px]'>Announcments</a></Link>
                    <Link href={'#'}><a className='mt-[20px]'>Faculty</a></Link>
                    <Link href={'#'}><a className='mt-[20px]'>Events</a></Link>
                    <Link href={'#'}><a className='mt-[20px]'>Research</a></Link>
                </div>
            </div>
        </div>
    );
}