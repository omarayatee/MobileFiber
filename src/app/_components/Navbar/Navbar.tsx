"use client";

import logo from "../../../assets/images/logo-nav.jpeg";
import { FaHeadset } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { FaBars } from "react-icons/fa";
import { Button } from "@/components/ui/button";


import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";


export default function Navbar() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between h-16 lg:h-18 gap-4 lg:gap-8">
            <Link href="/" className="flex gap-2 justify-center items-center">
              <div className="flex flex-col gap-0.5 items-center justify-center">
                <h3 className="text-[#008236] text-3xl">Mobile Fiber</h3>
                <p className="text-xl">مندوب فايبر موبايلي</p>
              </div>
              <Image
                className="w-auto rounded-3xl"
                src={logo}
                alt="mobile-image"
                width={50}
                height={50}
              />
            </Link>
            <form className="hidden lg:flex flex-1 max-w-2xl">
              <Field orientation="horizontal" className="relative ">
                <Input
                  type="search"
                  className="w-full! px-5! py-5! pr-12! rounded-full! border! border-gray-200! bg-gray-50/50 focus:bg-white! focus:outline-none! focus:ring-2! focus:ring-green-500/20! focus:border-green-500! transition-all! text-sm"
                  placeholder="البحث عن الخدمة التي تحتاجها ..."
                />
                <Button className="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-green-600 text-white flex items-center justify-center hover:bg-green-700 transition-colors">
                  <FaSearch />
                </Button>
              </Field>
            </form>
            <nav className="hidden xl:flex items-center gap-5">
              <Link
                href="/"
                className="text-gray-700 hover:text-green-600 font-medium transition-colors"
              >
                الرئيسية
              </Link>
              <Link
                href="#about"
                className="text-gray-700 hover:text-green-600 font-medium transition-colors"
              >
                من نحن
              </Link>
              <Link
                href="#packages"
                className="text-gray-700 hover:text-green-600 font-medium transition-colors"
              >
                الباقات
              </Link>
              <Link
                href="#help"
                className="text-gray-700 hover:text-green-600 font-medium transition-colors"
              >
                خدماتنا
              </Link>
              <Link
                href="#customer"
                className="text-gray-700 hover:text-green-600 font-medium transition-colors"
              >
                آراء عملائنا
              </Link>
              <Link
                href="#contact"
                className="text-gray-700 hover:text-green-600 font-medium transition-colors"
              >
                تواصل معنا
              </Link>
            </nav>
            <div className="flex items-center gap-1 lg:gap-2">
              <Link
                href="#contact"
                className="hidden lg:flex items-center gap-2 pr-3 mr-2 border-r border-gray-200 hover:opacity-80 transition-opacity"
              >
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                  <FaHeadset className=" text-green-500" />
                </div>
                <div className="text-xs">
                  <div>
                    <div className="text-gray-400">تواصل معنا \ Support</div>
                    <div className="font-semibold text-gray-700">24/7 Help</div>
                  </div>
                </div>
              </Link>

              <Sheet>
                <SheetTrigger className="lg:hidden cursor-pointer ml-1 w-10 h-10 rounded-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center transition-colors">
                  <FaBars />
                </SheetTrigger>
                <SheetContent className="lg:hidden w-80! right-0! max-w-[85vw] overflow-y-auto!">
                  <SheetHeader className="border-b border-gray-100">
                    <SheetTitle>
                      <div className="flex gap-2 justify-end">
                        <div className="flex flex-col gap-0.5 items-center justify-center">
                          <h3 className="text-[#008236] text-xl">
                            Mobile Fiber Srv
                          </h3>
                          <p>مندوب فايبر موبايلي</p>
                        </div>
                        <Image
                          className="w-auto rounded-3xl"
                          src={logo}
                          alt="mobile-image"
                          width={50}
                          height={50}
                        />
                      </div>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="grid flex-1 auto-rows-min gap-6 px-4">
                    <form className="flex flex-1 max-w-2xl pb-4 border-b border-gray-100">
                      <Field orientation="horizontal" className="relative ">
                        <Input
                          type="search"
                          className="w-full! px-5! py-6! pr-12! rounded-xl! border! border-gray-200! bg-gray-50/50 focus:bg-white! focus:outline-none! focus:ring-2! focus:ring-green-500/20! focus:border-green-500! transition-all! text-sm"
                          placeholder="البحث عن خدمات ..."
                        />
                        <Button className="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-lg bg-green-600 text-white flex items-center justify-center hover:bg-green-700 transition-colors">
                          <FaSearch />
                        </Button>
                      </Field>
                    </form>
                    <nav>
                      <div className="space-y-1 flex flex-col">
                        <SheetClose>
                          <Link
                            href="/"
                            className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors"
                          >
                            الرئيسية
                          </Link>
                        </SheetClose>
                        <SheetClose>
                          <Link
                            href="#about"
                            className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors"
                          >
                            من نحن
                          </Link>
                        </SheetClose>
                        <SheetClose>
                          <Link
                            href="#packages"
                            className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors"
                          >
                            الباقات
                          </Link>
                        </SheetClose>

                        <SheetClose>
                          <Link
                            href="#help"
                            className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors"
                          >
                            خدماتنا
                          </Link>
                        </SheetClose>

                        <SheetClose>
                          <Link
                            href="#customer"
                            className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors"
                          >
                            آراء عملائنا
                          </Link>
                        </SheetClose>
                        <SheetClose>
                          <Link
                            href="#contact"
                            className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors"
                          >
                            تواصل معنا
                          </Link>
                        </SheetClose>
                      </div>
                    </nav>
                    <div className="mx-4 border-t border-gray-100"></div>

                    <SheetClose>
                      <Link
                        href="#contact"
                        className="mt-2 p-4 rounded-xl bg-gray-50 border border-gray-100 flex items-center gap-3 hover:bg-green-50 transition-colors"
                      >
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                          <FaHeadset className="text-lg text-green-600" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-start text-gray-700">
                            Need Help?
                          </div>
                          <div className="text-sm text-green-600">
                            Contact Support
                          </div>
                        </div>
                      </Link>
                    </SheetClose>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
