'use client';

import gsap from 'gsap';
import Link from 'next/link';
import {
    useEffect,
    useRef,
    useState
} from 'react';
import { BsSearchHeart } from 'react-icons/bs';
import { SlUserFemale } from 'react-icons/sl';
import { TiShoppingCart } from 'react-icons/ti';

export default function HeaderComponent() {
    const [isSearch, setIsSearch] = useState<boolean>(false);
    const headerRef = useRef(null);
    const searchRef = useRef(null);

    function toggleSearch() {
        setIsSearch(!isSearch);
    };

    useEffect(() => {
        const search = searchRef.current;

        if (isSearch && search) {
            gsap.to(search, {
                scaleX: 1,
                transformOrigin: '100% 0%',
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
            });
        } else if (!isSearch && search) {
            gsap.to(search, {
                scaleX: 0,
                transformOrigin: '100% 0%',
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
            });
        };
    }, [isSearch]);

    useEffect(() => {
        const header = headerRef.current;

        const handleScroll = () => {
            if (window.scrollY > 0) {
                gsap.to(header, {
                    backgroundColor: '#fff',
                    duration: 0.3
                });
            } else {
                gsap.to(header, {
                    backgroundColor: 'transparent',
                    duration: 0.3
                });
            };
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <header
            className='fixed top-0 left-0 w-full flex justify-center z-20'
            ref={headerRef}
        >
            <div className='w-full max-w-screen-2xl flex justify-between p-4'>
                <Link
                    className='font-bold text-pink-600 hover:text-pink-400 duration-300'
                    href={'#'}
                >
                    Alice E-Shop
                </Link>
                <nav>
                    <ul className='flex gap-3'>
                        <li className=''>
                            <Link
                                className='py-1 px-3 font-bold text-sm text-pink-600 hover:text-pink-500 bg-pink-200 rounded-md hover:bg-pink-100 duration-300'
                                href={'#necklaces'}
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
                <div className='flex items-center gap-3'>
                    <form className='relative h-9 w-72 flex items-center justify-start gap-2'>
                        <input
                            className='w-full py-1 px-3 rounded-xl border border-pink-600 opacity-0'
                            type='text'
                            placeholder='Pesquisar...'
                            ref={searchRef}
                        />
                        <button
                            className='absolute right-1'
                            type='button'
                            title='Pesquisar'
                            onClick={toggleSearch}
                        >
                            <BsSearchHeart className='text-xl text-pink-400 hover:text-pink-600 duration-300' />
                        </button>
                    </form>

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
            </div>
        </header>
    );
}