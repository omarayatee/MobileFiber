import {
  FaWifi,
  FaRocket,
  FaHeadset,
  FaExchangeAlt,
  FaHome,
  FaCheckCircle,
} from "react-icons/fa";

const services = [
  {
    icon: <FaWifi />,
    title: "تركيب فايبر جديد",
    desc: "تفعيل خدمة الألياف البصرية بسرعة واحترافية.",
  },
  {
    icon: <FaRocket />,
    title: "باقات بسرعات عالية",
    desc: "اختر الباقة المناسبة لاحتياجاتك المنزلية أو التجارية.",
  },
  {
    icon: <FaExchangeAlt />,
    title: "ترقية الباقات",
    desc: "ترقية السرعة أو الباقة الحالية بسهولة.",
  },
  {
    icon: <FaHome />,
    title: "نقل الخدمة",
    desc: "نقل اشتراك الفايبر إلى موقعك الجديد.",
  },
  {
    icon: <FaHeadset />,
    title: "دعم ومتابعة",
    desc: "متابعة مستمرة حتى تشغيل الخدمة بالكامل.",
  },
  {
    icon: <FaCheckCircle />,
    title: "أفضل العروض",
    desc: "الحصول على أحدث عروض وخصومات موبايلي.",
  },
];

export default function Services() {
  return (
    <section
      id="help"
      className="py-24 px-6 bg-linear-to-b from-green-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold">
            خدماتنا
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-4">
            حلول الفايبر من موبايلي
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            نوفر لك جميع خدمات الألياف البصرية من موبايلي بأسرع وقت وأفضل
            الأسعار مع متابعة كاملة حتى تفعيل الخدمة.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border border-gray-100"
            >
              <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center text-3xl text-green-600 mb-6 group-hover:scale-110 transition">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20">
          <div className="bg-green-600 rounded-3xl p-10 md:p-14 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">
              جاهز للاشتراك في الفايبر؟
            </h3>

            <p className="mb-8 text-green-100">
              تواصل معنا الآن واحصل على أفضل عروض موبايلي للفايبر.
            </p>

            <a
              href="https://wa.me/966545575181"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-4 rounded-full font-bold hover:scale-105 transition"
            >
              اطلب الآن عبر واتساب
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}