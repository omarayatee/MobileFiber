import React from "react";
import modem from "../../../assets/images/modem-5g.webp";
import Image from "next/image";
export default function Modem() {
  return (
    <>
      <section className="pb-10 bg-linear-to-b from-slate-50 to-white">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="flex-1 border-t border-slate-200"></div>

          <span className="px-4 py-1 text-xs md:text-sm font-semibold text-sky-600 bg-sky-50 rounded-full">
            في حالة عدم وجود بوكسية في مبناك
          </span>

          <div className="flex-1 border-t border-slate-200"></div>
        </div>
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mt-3 text-sky-500">
              مودم موبايلي 5G المتنقل
            </h2>

            <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
              لا تقلق إذا لم تجد بوكسية في مبناك — نوفر لك جهاز راوتر موبايلي 5G
              المتنقل الذي يعمل بدون ألياف بصرية ويغطي جميع مناطق المملكة.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group relative overflow-hidden rounded-3xl bg-white shadow-lg border border-slate-100 hover:shadow-2xl duration-300">
              <div className="absolute inset-0 bg-linear-to-br from-sky-500/10 to-blue-600/5" />

              <div className="relative p-8">
                {/* Image */}
                <div className="h-44 rounded-2xl bg-slate-100 flex items-center justify-center mb-6">
                  <Image
                    src={modem}
                    alt="modem-mobile-5g"
                    width={100}
                    height={100}
                    className="object-cover"
                  />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  موبايلي هوم 5G
                </h3>

                <p className="text-slate-500 mb-6">
                  سرعة 200 ميجا مع تغطية ممتازة.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-2">
                    ✅ <span>إنترنت غير محدود</span>
                  </div>

                  <div className="flex items-center gap-2">
                    ✅ <span> مدة التزام : 18 دورة فوترية</span>
                  </div>

                  <div className="flex items-center gap-2">
                    ✅ <span>دعم فني مستمر</span>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-6">
                  <span className="text-slate-500">السعر</span>

                  <h4 className="text-4xl font-bold text-sky-600">
                    240
                    <span className="text-lg"> ر.س</span>
                  </h4>
                </div>

                <p className="text-slate-500 mb-6">
                  السعر شامل ضريبة القيمة المضافة
                </p>

                <div className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-xl font-semibold transition cursor-pointer text-center">
                     <a
                    href="https://wa.me/966545575181"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    اطلب الان
                  </a>                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative overflow-hidden rounded-3xl bg-white shadow-lg border border-slate-100 hover:shadow-2xl duration-300">
              <div className="absolute inset-0 bg-linear-to-br from-sky-500/10 to-blue-600/5" />

              <div className="relative p-8">
                {/* Image */}
                <div className="h-44 rounded-2xl bg-slate-100 flex items-center justify-center mb-6">
                  <Image
                    src={modem}
                    alt="modem-mobile-5g"
                    width={100}
                    height={100}
                    className="object-cover"
                  />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  موبايلي هوم 5G
                </h3>

                <p className="text-slate-500 mb-6">
                  سرعة 100 ميجا مع تغطية ممتازة.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-2">
                    ✅ <span>إنترنت غير محدود</span>
                  </div>

                  <div className="flex items-center gap-2">
                    ✅ <span> مدة التزام : 18 دورة فوترية</span>
                  </div>

                  <div className="flex items-center gap-2">
                    ✅ <span>دعم فني مستمر</span>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-6">
                  <span className="text-slate-500">السعر</span>

                  <h4 className="text-4xl font-bold text-sky-600">
                    230
                    <span className="text-lg"> ر.س</span>
                  </h4>
                </div>

                <p className="text-slate-500 mb-6">
                  السعر شامل ضريبة القيمة المضافة
                </p>

                <div className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-xl font-semibold transition cursor-pointer text-center">
                     <a
                    href="https://wa.me/966545575181"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    اطلب الان
                  </a>                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative overflow-hidden rounded-3xl bg-white shadow-lg border border-slate-100 hover:shadow-2xl duration-300">
              <div className="absolute inset-0 bg-linear-to-br from-sky-500/10 to-blue-600/5" />

              <div className="relative p-8">
                {/* Image */}
                <div className="h-44 rounded-2xl bg-slate-100 flex items-center justify-center mb-6">
                  <Image
                    src={modem}
                    alt="modem-mobile-5g"
                    width={100}
                    height={100}
                    className="object-cover"
                  />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  موبايلي هوم 5G
                </h3>

                <p className="text-slate-500 mb-6">
                  سرعات غير محدوده مع تغطية ممتازة.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-2">
                    ✅ <span>إنترنت غير محدود</span>
                  </div>

                  <div className="flex items-center gap-2">
                    ✅ <span> مدة التزام : 18 دورة فوترية</span>
                  </div>

                  <div className="flex items-center gap-2">
                    ✅ <span>دعم فني مستمر</span>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-6">
                  <span className="text-slate-500">السعر</span>

                  <h4 className="text-4xl font-bold text-sky-600">
                    402.5
                    <span className="text-lg"> ر.س</span>
                  </h4>
                </div>

                <p className="text-slate-500 mb-6">
                  السعر شامل ضريبة القيمة المضافة
                </p>

                <div className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-xl font-semibold transition cursor-pointer text-center">
                     <a
                    href="https://wa.me/966545575181"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    اطلب الان
                  </a>                </div>
              </div>
            </div>



          </div>
        </div>
      </section>
    </>
  );
}
