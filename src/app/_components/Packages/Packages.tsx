import Image from "next/image";
import React from "react";
import packageone from "../../../assets/images/first-package.webp";
import secondpackage from "../../../assets/images/second-package.webp";
import thirdpackage from "../../../assets/images/third-package.jpg";
import fourthpackage from "../../../assets/images/fourth-package.webp";
import fifthpackage from "../../../assets/images/fifth-package.avif";
import {
  FaSearch,
  FaHashtag,
  FaWhatsapp,
  FaCheckCircle,
  FaLightbulb,
  FaDownload,
  FaUpload,
  FaWifi,
  FaHome,
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
          <span className="text-sky-600 font-semibold">Mobile Fiber</span>

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
          <div
            className="
    group
    relative
    overflow-hidden
    rounded-3xl
    border border-sky-100
    bg-white/5
    backdrop-blur-md
    p-6
    transition-all
    duration-500
    hover:-translate-y-3
    hover:border-sky-500/50
    hover:shadow-[0_0_40px_rgba(34,197,94,0.2)]
  "
          >
            <div  className="absolute inset-0 pointer-events-none bg-linear-to-b from-sky-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" ></div>

            <span className="text-sky-600 font-semibold">هوم فايبر</span>

            <h3 className="mt-4 text-5xl font-bold text-sky-400">
              300
              <span className="text-lg text-slate-400 mr-2">Mbps</span>
            </h3>

            <p className="mt-3 text-slate-400">
              سرعة إنترنت فائقة للمشاهدة والألعاب والعمل من المنزل
            </p>

            <div className="my-6 h-px bg-white/10"></div>

            <ul className="space-y-4 text-slate-300">
              <li className="flex items-center gap-3"><FaDownload className="text-sky-400 text-lg" /> <span>سرعة التحميل تصل إلى 300 ميجا/ثانية</span></li>
              <li className="flex items-center gap-3"><FaUpload className="text-sky-400 text-lg" />  <span>سرعة الرفع تصل إلى 100 ميجا/ثانية</span></li>
              <li className="flex items-center gap-3"><FaWifi className="text-sky-400 text-lg" /> <span>اتصال ثابت وعالي الجودة</span></li>
              <li className="flex items-center gap-3"> <FaHome className="text-sky-400 text-lg" /> <span>مناسب لجميع أفراد الأسرة</span></li>
            </ul>

            <div className="mt-8 text-center">
              <h4 className="text-4xl font-bold text-black-500">
                287.5
                <span className="text-lg text-slate-400 mr-2">ريال / شهر</span>
              </h4>
            </div>

            <a
              href="https://wa.me/966545575181"
              target="_blank"
              rel="noopener noreferrer"
              className="
      mt-8
      flex
      w-full
      items-center
      justify-center
      rounded-xl
      bg-sky-500
      py-3
      font-semibold
      text-white
      transition-all
      hover:bg-sky-400
      cursor-pointer
    "
            >
              اطلب الآن
            </a>
          </div>
          {/*Second Card  */}
          <div
            className="
    group
    relative
    overflow-hidden
    rounded-3xl
    border border-sky-100
    bg-white/5
    backdrop-blur-md
    p-6
    transition-all
    duration-500
    hover:-translate-y-3
    hover:border-sky-500/50
    hover:shadow-[0_0_40px_rgba(34,197,94,0.2)]
  "
          >
            <div  className="absolute inset-0 pointer-events-none bg-linear-to-b from-sky-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" ></div>

            <span className="text-sky-600 font-semibold">هوم فايبر</span>

            <h3 className="mt-4 text-5xl font-bold text-sky-400">
              400
              <span className="text-lg text-slate-400 mr-2">Mbps</span>
            </h3>

            <p className="mt-3 text-slate-400">
              سرعة إنترنت فائقة للمشاهدة والألعاب والعمل من المنزل
            </p>

            <div className="my-6 h-px bg-white/10"></div>

            <ul className="space-y-4 text-slate-300">
              <li className="flex items-center gap-3"><FaDownload className="text-sky-400 text-lg" /> <span>سرعة التحميل تصل إلى 400 ميجا/ثانية</span></li>
              <li className="flex items-center gap-3"><FaUpload className="text-sky-400 text-lg" />  <span>سرعة الرفع تصل إلى 150 ميجا/ثانية</span></li>
              <li className="flex items-center gap-3"><FaWifi className="text-sky-400 text-lg" /> <span>اتصال ثابت وعالي الجودة</span></li>
              <li className="flex items-center gap-3"> <FaHome className="text-sky-400 text-lg" /> <span>مناسب لجميع أفراد الأسرة</span></li>
            </ul>

            <div className="mt-8 text-center">
              <h4 className="text-4xl font-bold text-black-500">
                345
                <span className="text-lg text-slate-400 mr-2">ريال / شهر</span>
              </h4>
            </div>

            <a
              href="https://wa.me/966545575181"
              target="_blank"
              rel="noopener noreferrer"
              className="
      mt-8
      flex
      w-full
      items-center
      justify-center
      rounded-xl
      bg-sky-500
      py-3
      font-semibold
      text-white
      transition-all
      hover:bg-sky-400
      cursor-pointer
    "
            >
              اطلب الآن
            </a>
          </div>

          {/* third Card */}
          <div
            className="
    group
    relative
    overflow-hidden
    rounded-3xl
    border border-sky-100
    bg-white/5
    backdrop-blur-md
    p-6
    transition-all
    duration-500
    hover:-translate-y-3
    hover:border-sky-500/50
    hover:shadow-[0_0_40px_rgba(34,197,94,0.2)]
  "
          >
            <div  className="absolute inset-0 pointer-events-none bg-linear-to-b from-sky-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" ></div>

            <span className="text-sky-600 font-semibold">هوم فايبر</span>

            <h3 className="mt-4 text-5xl font-bold text-sky-400">
              500
              <span className="text-lg text-slate-400 mr-2">Mbps</span>
            </h3>

            <p className="mt-3 text-slate-400">
              سرعة إنترنت فائقة للمشاهدة والألعاب والعمل من المنزل
            </p>

            <div className="my-6 h-px bg-white/10"></div>

            <ul className="space-y-4 text-slate-300">
              <li className="flex items-center gap-3"><FaDownload className="text-sky-400 text-lg" /> <span>سرعة التحميل تصل إلى 500 ميجا/ثانية</span></li>
              <li className="flex items-center gap-3"><FaUpload className="text-sky-400 text-lg" />  <span>سرعة الرفع تصل إلى 200 ميجا/ثانية</span></li>
              <li className="flex items-center gap-3"><FaWifi className="text-sky-400 text-lg" /> <span>اتصال ثابت وعالي الجودة</span></li>
              <li className="flex items-center gap-3"> <FaHome className="text-sky-400 text-lg" /> <span>مناسب لجميع أفراد الأسرة</span></li>
            </ul>

            <div className="mt-8 text-center">
              <h4 className="text-4xl font-bold text-black-500">
                402.5
                <span className="text-lg text-slate-400 mr-2">ريال / شهر</span>
              </h4>
            </div>

            <a
              href="https://wa.me/966545575181"
              target="_blank"
              rel="noopener noreferrer"
              className="
      mt-8
      flex
      w-full
      items-center
      justify-center
      rounded-xl
      bg-sky-500
      py-3
      font-semibold
      text-white
      transition-all
      hover:bg-sky-400
      cursor-pointer
    "
            >
              اطلب الآن
            </a>
          </div>

          {/* fourth Card */}
          <div
            className="
    group
    relative
    overflow-hidden
    rounded-3xl
    border border-sky-100
    bg-white/5
    backdrop-blur-md
    p-6
    transition-all
    duration-500
    hover:-translate-y-3
    hover:border-sky-500/50
    hover:shadow-[0_0_40px_rgba(34,197,94,0.2)]
  "
          >
            <div  className="absolute inset-0 pointer-events-none bg-linear-to-b from-sky-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" ></div>

            <span className="text-sky-600 font-semibold">هوم فايبر</span>

            <h3 className="mt-4 text-5xl font-bold text-sky-400">
              قيمرز 500
            </h3>

            <p className="mt-3 text-slate-400">
              سرعة إنترنت فائقة للمشاهدة والألعاب والعمل من المنزل
            </p>

            <div className="my-6 h-px bg-white/10"></div>

            <ul className="space-y-4 text-slate-300">
              <li className="flex items-center gap-3"><FaDownload className="text-sky-400 text-lg" /> <span>سرعة التحميل تصل إلى 500 ميجا/ثانية</span></li>
              <li className="flex items-center gap-3"><FaUpload className="text-sky-400 text-lg" />  <span>سرعة الرفع تصل إلى 200 ميجا/ثانية</span></li>
              <li className="flex items-center gap-3"><FaWifi className="text-sky-400 text-lg" /> <span>3 مقوي واي فاي مجانا</span></li>
              <li className="flex items-center gap-3"> <FaHome className="text-sky-400 text-lg" /> <span>مناسب لجميع أفراد الأسرة</span></li>
            </ul>

            <div className="mt-8 text-center">
              <h4 className="text-4xl font-bold text-black-500">
                402.5
                <span className="text-lg text-slate-400 mr-2">ريال / شهر</span>
              </h4>
            </div>

            <a
              href="https://wa.me/966545575181"
              target="_blank"
              rel="noopener noreferrer"
              className="
      mt-8
      flex
      w-full
      items-center
      justify-center
      rounded-xl
      bg-sky-500
      py-3
      font-semibold
      text-white
      transition-all
      hover:bg-sky-400
      cursor-pointer
    "
            >
              اطلب الآن
            </a>
          </div>

          {/* Fifth Card */}

          <div
            className="
    group
    relative
    overflow-hidden
    rounded-3xl
    border border-sky-100
    bg-white/5
    backdrop-blur-md
    p-6
    transition-all
    duration-500
    hover:-translate-y-3
    hover:border-sky-500/50
    hover:shadow-[0_0_40px_rgba(34,197,94,0.2)]
  "
          >
            <div  className="absolute inset-0 pointer-events-none bg-linear-to-b from-sky-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" ></div>

            <span className="text-sky-600 font-semibold">هوم فايبر</span>

            <h3 className="mt-4 text-5xl font-bold text-sky-400">
              1 جيجابت
            </h3>

            <p className="mt-3 text-slate-400">
              سرعة إنترنت فائقة للمشاهدة والألعاب والعمل من المنزل
            </p>

            <div className="my-6 h-px bg-white/10"></div>

            <ul className="space-y-4 text-slate-300">
              <li className="flex items-center gap-3"><FaDownload className="text-sky-400 text-lg" /> <span>سرعة التحميل تصل إلى 1 جيجابت/ثانية</span></li>
              <li className="flex items-center gap-3"><FaUpload className="text-sky-400 text-lg" />  <span>سرعة الرفع تصل إلى 300 ميجا/ثانية</span></li>
              <li className="flex items-center gap-3"><FaWifi className="text-sky-400 text-lg" /> <span>3 مقوي واي فاي مجانا</span></li>
              <li className="flex items-center gap-3"> <FaHome className="text-sky-400 text-lg" /> <span>مناسب لجميع أفراد الأسرة</span></li>
            </ul>

            <div className="mt-8 text-center">
              <h4 className="text-4xl font-bold text-black-500">
                920
                <span className="text-lg text-slate-400 mr-2">ريال / شهر</span>
              </h4>
            </div>

            <a
              href="https://wa.me/966545575181"
              target="_blank"
              rel="noopener noreferrer"
              className="
      mt-8
      flex
      w-full
      items-center
      justify-center
      rounded-xl
      bg-sky-500
      py-3
      font-semibold
      text-white
      transition-all
      hover:bg-sky-400
      cursor-pointer
    "
            >
              اطلب الآن
            </a>
          </div>

          
        </div>
        

        <div className="py-20 bg-slate-50 mt-10">
          <div className="container mx-auto px-4">
            {/* Heading */}
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold leading-relaxed">
                اشتراطات تركيب{" "}
                <span className="text-sky-600">موبايلي فايبر</span>
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
                  <div className="w-14 h-14 mx-auto rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-xl font-bold">
                    {step.id}
                  </div>

                  <div className="mt-4 text-sky-600 text-2xl flex justify-center">
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
