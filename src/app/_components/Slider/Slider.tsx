"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Image from 'next/image';
import heroimg from "../../../assets/images/Mobily-Flex-Plus-Packages.webp"
import fiberimg from "../../../assets/images/fiber-background.jpg"
import mobimg from "../../../assets/images/mobily-background.jpg"
import mobgaming from "../../../assets/images/mob-gaming.jpg"
import { FaPhoneAlt } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa6';
import { Autoplay } from 'swiper/modules';

export default function Slider() {
  return (
    <Swiper
    id='home'
      modules={[Autoplay]}
      autoplay={{delay : 3000, disableOnInteraction : false}}
      loop={true}
      spaceBetween={0}
      slidesPerView={1}
      className='w-full'
    >
      <SwiperSlide>
         <div
    className="relative h-120 w-full"
  >
    <Image src={heroimg} alt='Mobily-backgroud' fill priority className='object-cover' />
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/50"></div>

    {/* Content */}
    <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        بيتك يستاهل الافضل - فايبر بجوده لا تنقطع
      </h1>

      <p className="text-lg md:text-xl mb-8">
        مشاهدة , العاب , عمل عن بعد - كل شئ يشتغل بسلاسة تامة      </p>

      <div className="flex gap-4 flex-wrap justify-center">
        <a
          href="tel:+966545575181"
          className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold transition flex gap-2"
        >
            <FaPhoneAlt />
          التواصل مع مندوب الياف بصرية
        </a>

        <a
          href="https://wa.me/966545575181"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-lg font-semibold transition flex gap-2"
        >
            <FaWhatsapp />
          واتساب
        </a>
      </div>
    </div>
  </div>
      </SwiperSlide>
      <SwiperSlide>
         <div
    className="relative h-120 w-full"
  >
    <Image src={fiberimg} alt='fiberimg-backgroud' fill priority className='object-cover' />
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/50"></div>

    {/* Content */}
    <div className="relative z-10 flex h-full flex-col items-start justify-center text-center text-white px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        تغطية شاملة - سرعه ثابتة في كل مكان بالمملكة
      </h1>

      <p className="text-lg md:text-xl mb-8">
        من المدينة للقرية , انترنت موثوق يوصلك بالعالم بدون انقطاع     </p>

      <div className="flex gap-4 flex-wrap justify-center">
        <a
          href="tel:+966545575181"
          className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold transition flex gap-2"
        >
            <FaPhoneAlt />
          التواصل مع مندوب الياف بصرية
        </a>

        <a
          href="https://wa.me/966545575181"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-lg font-semibold transition flex gap-2"
        >
            <FaWhatsapp />
          واتساب
        </a>
      </div>
    </div>
  </div>
      </SwiperSlide>
      <SwiperSlide>
         <div
    className="relative h-120 w-full"
  >
    <Image src={mobimg} alt='fiberimg-backgroud' fill priority className='object-cover' />
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/50"></div>

    {/* Content */}
    <div className="relative z-10 flex h-full flex-col items-end justify-center text-center text-white px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        5G منزلي - سرعة لاسلكية تفوق التوقعات
      </h1>

      <p className="text-lg md:text-xl mb-8">
    بدون تمديدات وبدون انتظار - شبك وانطلق من اول لحظة      </p>

      <div className="flex gap-4 flex-wrap justify-center">
        <a
          href="tel:+966545575181"
          className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold transition flex gap-2"
        >
            <FaPhoneAlt />
          التواصل مع مندوب الياف بصرية
        </a>

        <a
          href="https://wa.me/966545575181"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-lg font-semibold transition flex gap-2"
        >
            <FaWhatsapp />
          واتساب
        </a>
      </div>
    </div>
  </div>
      </SwiperSlide>
      <SwiperSlide>
         <div
    className="relative h-120 w-full"
  >
    <Image src={mobgaming} alt='fiber-gaming' fill priority className='object-cover' />
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/50"></div>

    {/* Content */}
    <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        وداعا للتقطيع -انترنت بسرعة الضوء في بيتك
      </h1>

      <p className="text-lg md:text-xl mb-8">
    العاب, شغل , بث مباشر - كلها تشتغل بدون اي تأخير مع ألياف بصرية حقيقية     </p>

      <div className="flex gap-4 flex-wrap justify-center">
        <a
          href="tel:+966545575181"
          className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold transition flex gap-2"
        >
            <FaPhoneAlt />
          التواصل مع مندوب الياف بصرية
        </a>

        <a
          href="https://wa.me/966545575181"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-lg font-semibold transition flex gap-2"
        >
            <FaWhatsapp />
          واتساب
        </a>
      </div>
    </div>
  </div>
      </SwiperSlide>
      
    </Swiper>
  );
};