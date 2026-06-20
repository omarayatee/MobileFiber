import React from 'react'
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
export default function Contact() {
  return (
    <>
      <section id='contact' className="pb-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            تواصل معنا
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            تواصل مع مندوب موبايلي فايبر للحصول على أفضل العروض والباقات
            المناسبة لك.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Phone Card */}
          <a
            href="tel:+966545575181"
            className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100"
          >
            <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-5 group-hover:scale-110 transition">
              <FaPhoneAlt className="text-3xl text-blue-600" />
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-2">
              اتصال مباشر
            </h3>

            <p className="text-slate-600 mb-4">
              اتصل الآن واحصل على استشارة مجانية.
            </p>

            <span className="text-lg font-semibold text-blue-600">
              +966 54 557 5181
            </span>
          </a>

          {/* WhatsApp Card */}
          <a
            href="https://wa.me/966545575181"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100"
          >
            <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mb-5 group-hover:scale-110 transition">
              <FaWhatsapp className="text-4xl text-green-600" />
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-2">
              واتساب
            </h3>

            <p className="text-slate-600 mb-4">
              راسلنا مباشرة على واتساب للرد السريع.
            </p>

            <span className="text-lg font-semibold text-green-600">
              +966 54 557 5181
            </span>
          </a>
        </div>
      </div>
    </section>
    </>
  )
}
