import Link from 'next/link';
import { BsSearchHeart } from 'react-icons/bs';
import { SlUserFemale } from 'react-icons/sl';
import { TiShoppingCart } from 'react-icons/ti';

export default function HeaderComponent() {
    return (
        <header className='w-full flex justify-between p-4'>
            <nav>
                <ul className='flex gap-3'>
                    <li className=''>
                        <Link
                            className='py-1 px-3 font-bold text-sm text-pink-600 hover:text-pink-500 bg-pink-200 rounded-md hover:bg-pink-100 duration-300'
                            href={'#'}
                        >
                            Colares
                        </Link>
                    </li>
                    <li>
                        <Link
                            className='py-1 px-3 font-bold text-sm text-pink-600 hover:text-pink-500 bg-pink-200 rounded-md hover:bg-pink-100 duration-300'
                            href={'#'}
                        >
                            Puseiras
                        </Link>
                    </li>
                    <li>
                        <Link
                            className='py-1 px-3 font-bold text-sm text-pink-600 hover:text-pink-500 bg-pink-200 rounded-md hover:bg-pink-100 duration-300'
                            href={'#'}
                        >
                            Anéis
                        </Link>
                    </li>
                    <li>
                        <Link
                            className='py-1 px-3 font-bold text-sm text-pink-600 hover:text-pink-500 bg-pink-200 rounded-md hover:bg-pink-100 duration-300'
                            href={'#'}
                        >
                            Tornozeleiras
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className='flex items-end gap-3'>
                <Link href={'#'}>
                    <BsSearchHeart className='text-xl text-pink-400 hover:text-pink-600 duration-300' />
                </Link>

                <Link
                    className='flex flex-col group'
                    href={'#'}
                >
                    <span className='text-xs text-end text-blue-400 group-hover:text-blue-600 -mb-1 duration-300'>0</span>
                    <TiShoppingCart className='text-2xl text-pink-400 group-hover:text-pink-600 duration-300' />
                </Link>

                <Link
                    href={'#'}
                >
                    <SlUserFemale className='text-2xl text-pink-400 hover:text-pink-600 duration-300' />
                </Link>
            </div>
        </header>
    );
}