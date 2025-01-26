'use client';

import {
    Swiper,
    SwiperSlide
} from 'swiper/react';
import {
    Navigation,
    Autoplay
} from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import { LiaShippingFastSolid } from 'react-icons/lia';
import { TbCashRegister } from 'react-icons/tb';
import { HiMiniUserGroup } from 'react-icons/hi2';

export default function SlidesMainComponent() {
    return (
        <div className='relative min-w-full max-h-full xl:max-h-screen flex justify-center'>
            <Swiper
                className='w-full'
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                pagination={{ clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }}
                autoplay={{ delay: 5000 }}
                modules={[Navigation, Autoplay]}
            >
                <SwiperSlide>
                    <Image src={'/slides/womens-day-3211207_1920.jpg'}
                        className='w-full h-full'
                        alt='Image Slide 1'
                        aria-label='Slide'
                        priority
                        width={1920}
                        height={1075}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={'/slides/abstract-3123829_1920.jpg'}
                        className='w-full h-full'
                        alt='Image Slide 2'
                        aria-label='Slide'
                        priority
                        width={1920}
                        height={1075}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={'/slides/ai-generated-8705017_1920.png'}
                        className='w-full h-full'
                        alt='Image Slide 3'
                        aria-label='Slide'
                        priority
                        width={1920}
                        height={1075}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={'/slides/design-3372889_1920.jpg'}
                        className='w-full h-full'
                        alt='Image Slide 4'
                        aria-label='Slide'
                        priority
                        width={1920}
                        height={1075}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={'/slides/ai-generated-8612487_1920.jpg'}
                        className='w-full h-full'
                        alt='Image Slide 5'
                        aria-label='Slide'
                        priority
                        width={1920}
                        height={1075}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={'/slides/ai-generated-8659507_1920.jpg'}
                        className='w-full h-full'
                        alt='Image Slide 6'
                        aria-label='Slide'
                        priority
                        width={1920}
                        height={1075}
                    />
                </SwiperSlide>
            </Swiper>
            <div className='absolute bottom-0 left-0 w-4/5 flex items-center justify-center gap-14 bg-white py-5 rounded-se-full z-10 cursor-default'>
                <div className='flex items-center gap-3 text-pink-500'>
                    <LiaShippingFastSolid className='text-2xl' />
                    <div className='text-sm text-pink-500'>
                        <p className='font-bold'>Frete grátis</p>
                        <p>Em compras acima de R$ 149,00</p>
                    </div>
                </div>
                <div className='flex items-center gap-3 text-pink-500'>
                    <HiMiniUserGroup className='text-2xl' />
                    <div className='text-sm text-pink-500'>
                        <p className='font-bold'>99% de clientes satisfeitos</p>
                        <p>As opiniões dos nossos clientes falam por si</p>
                    </div>
                </div>
                <div className='flex items-center gap-3 text-pink-500'>
                    <TbCashRegister className='text-2xl' />
                    <div className='text-sm'>
                        <p className='font-bold'>Originalidade garantida</p>
                        <p>30 dias de garantia para cada produto da nossa loja</p>
                    </div>
                </div>
            </div>
            <div className='absolute w-1/5 h-20 right-0 bottom-0 flex items-center'>
                <div className='swiper-button-next' />
                <div className='swiper-button-prev' />
            </div>
        </div>
    );
}