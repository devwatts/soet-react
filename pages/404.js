import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Navbar from '../components/layout/navbar';
import Footer from '../components/layout/footer';

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000);
    }, []);

    return (
        <>
        <Navbar/>
        <div class="flex items-center justify-center h-full mt-52">
            <div class="text-center justify-center ">
            <h1 class="text-5xl">Oooops...</h1>
            <h2 class="text-2xl mt-2">That page cannot be found</h2>
            <p class="flex items-center justify-center text-gray-500 mt-1">Go back to the 
            <Link href="/">
                <span class="text-blue-600 underline ml-0.5 cursor-pointer">Homepage</span>
            </Link>
            </p>
            </div>
        </div>
        <Footer/>
        </>
    );
}
 
export default NotFound;