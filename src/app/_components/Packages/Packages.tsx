import Image from "next/image";
import React from "react";
import packageone from "../../../assets/images/first-package.webp";
import secondpackage from "../../../assets/images/second-package.webp";
import thirdpackage from "../../../assets/images/third-package.jpg"
import fourthpackage from "../../../assets/images/fourth-package.webp"
import fifthpackage from "../../../assets/images/fifth-package.avif"
import {
  FaSearch,
  FaHashtag,
  FaWhatsapp,
  FaCheckCircle,
  FaLightbulb,
} from "react-icons/fa";

const steps = [
  {
    id: 1,
    icon: <FaSearch />,
    title: "ابحث عن البوكسية",
  },
  {
    id: 2,
    icon: <FaHashtag />,
    title: "صوّر رقم القطعة المعدنية",
  },
  {
    id: 3,
    icon: <FaWhatsapp />,
    title: "أرسل الصورة عبر واتساب",
  },
  {
    id: 4,
    icon: <FaCheckCircle />,
    title: "نؤكد التغطية ونحدد الموعد",
  },
];


export default function Packages() {
  return (
    <>
      <div id="packages" className="container mx-auto px-4 ">
        <div className="text-center mb-10">
          <span className="text-green-600 font-semibold">Mobile Fiber</span>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2">
            باقات موبايلي فايبر للإنترنت المنزلي
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-8">
            استمتع بسرعات إنترنت فائقة وثبات عالي مع أحدث باقات موبايلي فايبر
            المصممة لتلبية احتياجات الترفيه والعمل والدراسة لجميع أفراد الأسرة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* First Card */}
          <div className="relative w-95 h-180 rounded-[40px] overflow-hidden">
            {/* Background Image */}
            <Image
              src={packageone}
              alt="home fiber"
              fill
              className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#0A1F4F]/80"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-between h-full p-8 text-white text-center">
              {/* Top Content */}
              <div>
                <h2 className="text-5xl font-extrabold leading-tight">
                  هوم فايبر
                  <br />
                  300 ميجا
                </h2>

                <div className="mt-10 space-y-8 text-3xl leading-relaxed">
                  <p>
                    سرعة التحميل تصل إلى 300
                    <br />
                    ميجا في الثانية
                  </p>

                  <p>
                    سرعة الرفع تصل إلى 100 ميجا
                    <br />
                    في الثانية
                  </p>
                </div>
              </div>

              {/* Bottom Content */}
              <div className="pb-4">
                <h3 className="text-7xl font-bold">287.5</h3>

                <p className="text-3xl mt-2">ريال/شهر</p>

                <div className="bg-cyan-400 text-black mt-7 w-full  font-bold text-4xl p-6 rounded-4xl hover:bg-cyan-300 transition">
                  <a
                    href="https://wa.me/966545575181"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    اطلب الان
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/*Second Card  */}
          <div className="relative w-95 h-180 rounded-[40px] overflow-hidden">
            {/* Background Image */}
            <Image
              src={secondpackage}
              alt="home fiber"
              fill
              className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#0A1F4F]/80"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-between h-full p-8 text-white text-center">
              {/* Top Content */}
              <div>
                <h2 className="text-5xl font-extrabold leading-tight">
                  هوم فايبر
                  <br />
                  400 ميجا
                </h2>

                <div className="mt-10 space-y-8 text-3xl leading-relaxed">
                  <p>
                    سرعة التحميل تصل إلى 400
                    <br />
                    ميجا في الثانية
                  </p>

                  <p>
                    سرعة الرفع تصل إلى 150 ميجا
                    <br />
                    في الثانية
                  </p>
                </div>
              </div>

              {/* Bottom Content */}
              <div className="pb-4">
                <h3 className="text-7xl font-bold">345</h3>

                <p className="text-3xl mt-2">ريال/شهر</p>

                <div className="bg-cyan-400 text-black mt-7 w-full  font-bold text-4xl p-6 rounded-4xl hover:bg-cyan-300 transition">
                  <a
                    href="https://wa.me/966545575181"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    اطلب الان
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* third Card */}
          <div className="relative w-95 h-180 rounded-[40px] overflow-hidden">
            {/* Background Image */}
            <Image
              src={thirdpackage}
              alt="home fiber"
              fill
              className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#0A1F4F]/80"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-between h-full p-8 text-white text-center">
              {/* Top Content */}
              <div>
                <h2 className="text-5xl font-extrabold leading-tight">
                  هوم فايبر
                  <br />
                  500 ميجا
                </h2>

                <div className="mt-10 space-y-8 text-3xl leading-relaxed">
                  <p>
                    سرعة التحميل تصل إلى 500
                    <br />
                    ميجا في الثانية
                  </p>

                  <p>
                    سرعة الرفع تصل إلى 200 ميجا
                    <br />
                    في الثانية
                    <br />
                    3 مقوي واي فاي مجانا
                  </p>
                  
                  
                </div>
              </div>

              {/* Bottom Content */}
              <div className="pb-4">
                <h3 className="text-7xl font-bold">402.5</h3>

                <p className="text-3xl mt-2">ريال/شهر</p>

                <div className="bg-cyan-400 text-black mt-7 w-full  font-bold text-4xl p-6 rounded-4xl hover:bg-cyan-300 transition">
                  <a
                    href="https://wa.me/966545575181"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    اطلب الان
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* fourth Card */}
          <div className="relative w-95 h-180 rounded-[40px] overflow-hidden">
            {/* Background Image */}
            <Image
              src={fourthpackage}
              alt="home fiber"
              fill
              className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#0A1F4F]/80"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-between h-full p-8 text-white text-center">
              {/* Top Content */}
              <div>
                <h2 className="text-5xl font-extrabold leading-tight">
                  هوم فايبر
                  <br />
                  قيمرز 500
                </h2>

                <div className="mt-10 space-y-8 text-3xl leading-relaxed">
                  <p>
                    سرعة التحميل تصل إلى 500
                    <br />
                    ميجا في الثانية
                  </p>

                  <p>
                    سرعة الرفع تصل إلى 200 ميجا
                    <br />
                    في الثانية
                    <br />
                    3 مقوي واي فاي مجانا
                  </p>
                  
                  
                </div>
              </div>

              {/* Bottom Content */}
              <div className="pb-4">
                <h3 className="text-7xl font-bold">402.5</h3>

                <p className="text-3xl mt-2">ريال/شهر</p>

                <div className="bg-cyan-400 text-black mt-7 w-full  font-bold text-4xl p-6 rounded-4xl hover:bg-cyan-300 transition">
                  <a
                    href="https://wa.me/966545575181"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    اطلب الان
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Fifth Card */}
          <div className="relative w-95 h-180 rounded-[40px] overflow-hidden">
            {/* Background Image */}
            <Image
              src={fifthpackage}
              alt="home fiber"
              fill
              className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#0A1F4F]/80"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-between h-full p-8 text-white text-center">
              {/* Top Content */}
              <div>
                <h2 className="text-5xl font-extrabold leading-tight">
                  هوم فايبر
                  <br />
                  1 جيجابت
                </h2>

                <div className="mt-10 space-y-8 text-3xl leading-relaxed">
                  <p>
                    سرعة التحميل تصل إلى 1
                    <br />
                    جيجابت في الثانية
                  </p>

                  <p>
                    سرعة الرفع تصل إلى 300 ميجا
                    <br />
                    في الثانية
                    <br />
                    3 مقوي واي فاي مجانا
                  </p>
                  
                  
                </div>
              </div>

              {/* Bottom Content */}
              <div className="pb-4">
                <h3 className="text-7xl font-bold">920</h3>

                <p className="text-3xl mt-2">ريال/شهر</p>

                <div className="bg-cyan-400 text-black mt-7 w-full  font-bold text-4xl p-6 rounded-4xl hover:bg-cyan-300 transition">
                  <a
                    href="https://wa.me/966545575181"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    اطلب الان
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="py-20 bg-slate-50 mt-10">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold leading-relaxed">
            اشتراطات تركيب{" "}
            <span className="text-blue-600">موبايلي فايبر</span>
            <br />
            كيف تعرف هل منزلك جاهز؟
          </h2>

          <p className="mt-5 text-gray-600 text-sm md:text-lg leading-8">
            قبل طلب التركيب، تأكد من وجود بوكسية الألياف البصرية على واجهة
            المبنى ثم أرسل صورة الرقم للمندوب عبر واتساب.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xl font-bold">
                {step.id}
              </div>

              <div className="mt-4 text-blue-600 text-2xl flex justify-center">
                {step.icon}
              </div>

              <h3 className="mt-4 font-semibold text-gray-800">
                {step.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-10 bg-amber-50 border border-amber-200 rounded-2xl p-5 md:p-6 flex gap-4 items-start">
          <div className="text-amber-500 text-xl mt-1">
            <FaLightbulb />
          </div>

          <p className="text-gray-700 leading-8">
            <span className="font-bold text-amber-600">ملاحظة مهمة:</span>{" "}
            البوكسية قد تكون تابعة لأي مزود خدمة (موبايلي، STC، سلام...)،
            المهم وجود البنية التحتية للألياف البصرية في المبنى.
          </p>
        </div>
      </div>
    </div>






      </div>
    </>
  );
}
