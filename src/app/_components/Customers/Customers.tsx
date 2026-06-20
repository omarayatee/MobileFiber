import Image from 'next/image';
import profilef from "../../../assets/images/first-profile.jpg";
import profiles from "../../../assets/images/second-profile.jpg";
import profilet from "../../../assets/images/third-profile.jpg";
import React from 'react'



export default function Customers() {
  return (
    <>

    <section id='customer' className="pb-20 bg-linear-to-b from-white to-slate-50">
  <div className="container mx-auto px-4">

    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
        آراء عملائنا
      </h2>

      <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
        نفخر بثقة عملائنا في خدمات موبايلي فايبر وجودة الدعم وسرعة التركيب.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      <div className="relative bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
        <span className="absolute top-4 left-4 text-6xl text-blue-100 font-serif">
          "
        </span>

        <div className="flex gap-1 text-amber-400 mb-4">
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
        </div>

        <p className="text-slate-600 leading-7 mb-6">
          سرعة الإنترنت ممتازة جدًا والتركيب تم خلال وقت قصير، تجربة رائعة.
        </p>

        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
            <Image src={profilef} alt='profle-customer' width={48} height={48} className='rounded-full'/>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">
              محمد العنزي
            </h3>
            <p className="text-sm text-slate-500">
              عميل موبايلي فايبر
            </p>
          </div>
        </div>
      </div>

      <div className="relative bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
        <span className="absolute top-4 left-4 text-6xl text-green-100 font-serif">
          "
        </span>

        <div className="flex gap-1 text-amber-400 mb-4">
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
        </div>

        <p className="text-slate-600 leading-7 mb-6">
          أفضل خدمة ألياف بصرية استخدمتها، السرعة ثابتة والدعم سريع جدًا.
        </p>

        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
            <Image src={profiles} alt='profle-customer' width={48} height={48} className='rounded-full'/>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">
              نورة الخالدي
            </h3>
            <p className="text-sm text-slate-500">
              عميلة موبايلي فايبر
            </p>
          </div>
        </div>
      </div>

      <div className="relative bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
        <span className="absolute top-4 left-4 text-6xl text-purple-100 font-serif">
          "
        </span>

        <div className="flex gap-1 text-amber-400 mb-4">
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
        </div>

        <p className="text-slate-600 leading-7 mb-6">
          تم تفعيل الخدمة بسرعة والإنترنت مستقر حتى مع الأجهزة المتعددة.
        </p>

        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">
            <Image src={profilet} alt='profle-customer' width={48} height={48} className='rounded-full'/>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">
              مشعل الزهراني
            </h3>
            <p className="text-sm text-slate-500">
              عميل موبايلي فايبر
            </p>
          </div>
        </div>
      </div>

    </div>

  </div>
</section>


    </>
  )
}
