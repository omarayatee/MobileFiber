import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";
import { FaRocket } from "react-icons/fa6";
import { FaShieldAlt } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../../../assets/images/logo-nav.jpeg";
import Link from "next/link";
import { IoIosGlobe } from "react-icons/io";

export default function Footer() {
  return (
    <>
      <div className="bg-sky-50 border-y border-sky-100">
        <div className="container mx-auto px-4 py-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center shrink-0">
                <FaRocket className="text-sky-600 text-lg" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm">
                  سرعات إنترنت عالية
                </h4>
                <p className="text-gray-500 text-xs">حتى أحدث تقنيات الألياف البصرية</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center shrink-0">
                <IoIosGlobe  className="text-sky-600 text-lg" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm">
                  باقات إنترنت متنوعة
                </h4>
                <p className="text-gray-500 text-xs">خيارات تناسب جميع الاحتياجات</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center shrink-0">
                <FaShieldAlt className="text-sky-600 text-lg" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm">
                  مساعدة في الاشتراك
                </h4>
                <p className="text-gray-500 text-xs">دعم وإرشاد خلال خطوات التقديم</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center shrink-0">
                <FaHeadset className="text-sky-600 text-lg" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm">
                  دعم فني 24/7
                </h4>
                <p className="text-gray-500 text-xs">تواصل معنا في أي وقت</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-gray-900 text-white fixed-bottom">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 gap-lg-12 text-gray-400">
            <div className="lg:col-span-4">
              <div className="bg-[#FFFFFF] py-2 px-4 rounded-lg mb-6 flex gap-3 justify-center items-center w-50 h-15 leading-6 text-2xl">
                <Image
                  className="w-10 h-10 rounded-2xl"
                  src={logo}
                  alt="mobily-logo"
                />
                <h1 className="font-bold text-black text-xl">مندوب موبايلي</h1>
              </div>
              <p className="text-sm">
                مندوب الياف بصرية، نقدم لك أفضل حلول الإنترنت والألياف البصرية
                داخل المملكة. ونحرص على راحة عملائنا بتركيب سريع ودعم متواصل
                ومواعيد مرنة.
              </p>
              <p className=" text-sm">
                كل المعلومات المعروضة هدفها توضيح الخدمات والباقات فقط. الأفضل
                تتواصل معنا مباشرة للتأكد من التفاصيل قبل الاشتراك. نضمن لك سرية
                بياناتك. 
              </p>
              <p className="mb-6 text-sm">
                بياناتك تُستخدم فقط لخدمتك وبموافقتك الكاملة.
                Mobily FiberSRV.com خدمة وساطة مستقلة — لسنا الموقع الرسمي لأي شركة
                اتصالات. جميع العلامات التجارية المذكورة مملوكة لأصحابها
                وتُستخدم للإشارة فقط.
              </p>
              <div className="space-y-3 text-sm mb-6">
                <a
                  href="tel:+966545575181"
                  className="flex items-center gap-2 hover:text-sky-500"
                >
                  <FaPhoneAlt className="text-sky-500" />
                  <span>+966 54 557 5181</span>
                </a>
                <a
                  href="Ibraheem1999ahmed1999@gmail.com"
                  className="flex gap-2 items-center"
                >
                  <MdEmail className="text-sky-500" />
                  <span className="hover:text-sky-500 cursor-pointer">
                    support@Mobily-Fiber.com
                  </span>
                </a>
                <div className="flex gap-2 items-center">
                  <FaMapMarkerAlt className="text-sky-500" />
                  <span className="hover:text-sky-500 cursor-pointer">
                    جميع انحاء المملكة العربية السعوديه
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <a
                  href="#"
                  className="hover:cursor-pointer hover:bg-sky-500 w-10 h-10 rounded-full bg-[#1E2939] flex justify-center items-center hover:text-white transition-colors"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="#"
                  className="hover:cursor-pointer hover:bg-sky-500 w-10 h-10 rounded-full bg-[#1E2939] flex justify-center items-center hover:text-white transition-colors"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="hover:cursor-pointer hover:bg-sky-500 w-10 h-10 rounded-full bg-[#1E2939] flex justify-center items-center hover:text-white transition-colors"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="hover:cursor-pointer hover:bg-sky-500 w-10 h-10 rounded-full bg-[#1E2939] flex justify-center items-center hover:text-white transition-colors"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
            <div className="lg:col-span-2">
              <h3 className="font-semibold text-white text-lg mb-5">خدماتنا</h3>
              <ul className="space-y-3 text-sm">
                <li className="hover:text-sky-500 hover:cursor-pointer transition-colors">
                  <Link href="/">تركيب الألياف البصرية</Link>
                </li>
                <li className="hover:text-sky-500 hover:cursor-pointer transition-colors">
                  <Link href="/">تأسيس الشبكات المنزلية</Link>
                </li>
                <li className="hover:text-sky-500 hover:cursor-pointer transition-colors">
                  <Link href="/">دعم فني 24/7</Link>
                </li>
                <li className="hover:text-sky-500 hover:cursor-pointer transition-colors">
                  <Link href="/">
                    اختبار سرعة الإنترنت
                  </Link>
                </li>
                <li className="hover:text-sky-500 hover:cursor-pointer transition-colors">
                  <Link href="/">
                    صيانة الشبكات
                  </Link>
                </li>
                
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h3 className="font-semibold text-white text-lg mb-5">روابط سريعة</h3>
              <ul className="space-y-3 text-sm">
                <li className="hover:text-sky-500 hover:cursor-pointer transition-colors">
                  <Link href="/">الرئيسية</Link>
                </li>
                <li className="hover:text-sky-500 hover:cursor-pointer transition-colors">
                  <Link href="/">من نحن</Link>
                </li>
                <li className="hover:text-sky-500 hover:cursor-pointer transition-colors">
                  <Link href="/">خدماتنا</Link>
                </li>
                <li className="hover:text-sky-500 hover:cursor-pointer transition-colors">
                  <Link href="/">الباقات</Link>
                </li>
                <li className="hover:text-sky-500 hover:cursor-pointer transition-colors">
                  <Link href="/">المدونة</Link>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-2">
              <h3 className="font-semibold text-white text-lg mb-5">معلومات التواصل</h3>
              <ul className="space-y-3 text-sm">
                <li className="hover:text-sky-500 hover:cursor-pointer transition-colors">
                  <Link href="/">0545575181</Link>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800">
          <div className="container flex flex-wrap justify-center md:justify-between mx-auto px-4 py-6 gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 Mobily Fiber Srv. All rights reserved.
            </p>
            
          </div>
        </div>
      </footer>
    </>
  );
}
