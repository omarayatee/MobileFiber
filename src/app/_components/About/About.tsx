import Image from "next/image";
import React from "react";
import mandoub from "../../../assets/images/mandob-mob.webp";
export default function About() {
  return (
    <>
      <div className="mx-10 mt-10" id="about">
        <div className="flex flex-col md:flex-row">
          <Image
            src={mandoub}
            alt="mandoub"
            className="rounded-2xl"
            width={500}
            height={500}
          />
          <div className="flex flex-row items-center pb-10">
            <div className="bg-green-100 p-6 md:p-10 relative h-[90%]">
              <h2 className="text-sky-600 font-bold text-lg text-right mb-8">
                من نحن
              </h2>

              {/* Content */}
              <div className="text-center text-gray-700 leading-9 space-y-6">
                <p>
               نحن مندوب معتمد لخدمات موبايلي فايبر في جميع مدن المملكة. نصلك في منزلك, نركب مجانا. ونضمن لك افضل سرعة انترنت خلال ساعات من وقت طلبك.
                </p>

                <p>
                  نحن نعمل  لضمان حصولك على الباقة
                  الأنسب لاحتياجاتك بأسرع وقت ممكن، مع تقديم استشارات مجانية
                  ودعم مستمر.
                </p>
              </div>

              

              {/* Phone */}
              <div className="flex justify-end items-center gap-3 mt-8">
                <span className="text-3xl font-bold text-sky-500">
                  0545575181
                </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-sky-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V21a1 1 0 01-1 1C10.07 22 2 13.93 2 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
