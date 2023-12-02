"use client";

import { useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { Link, useLocation } from "react-router-dom";

export default function Example() {
  const path = useLocation().pathname;  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link
            to="/"
            className={`text-sm/6 ${
              path == "/"
                ? "text-blue-700 font-bold  border-b-2 border-blue-700"
                : "text-gray-900 font-semibold"
            }`}
          >
            خانه
          </Link>
          <Link
            to="/about"
            className={`text-sm/6 ${
              path == "/about"
                ? "text-blue-700 font-bold  border-b-2 border-blue-700"
                : "text-gray-900 font-semibold"
            }`}
          >
            درباره‌ما
          </Link>
          <Link
            to="/projects"
            className={`text-sm/6 ${
              path == "/projects"
                ? "text-blue-700 font-bold  border-b-2 border-blue-700"
                : "text-gray-900 font-semibold"
            }`}
          >
            پروژه‌ها
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">
          <Link
            to="/sign-in"
            className={`text-sm/6 ml-2 ${
              path == "/sign-in"
                ? "text-blue-700 font-bold  border-b-2 border-blue-700"
                : "text-gray-900 font-semibold"
            }`}
          >
            ورود
          </Link>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-4 text-gray-400"
          >
            <path
              fillRule="evenodd"
              d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  to="/"
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 hover:bg-gray-50
                     ${
                       path == "/"
                         ? "text-blue-700 font-bold  border-b-2"
                         : "text-gray-900 font-semibold"
                     }`}
                >
                  خانه
                </Link>
                <Link
                  to="/about"
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 hover:bg-gray-50
                     ${
                       path == "/about"
                         ? "text-blue-700 font-bold  border-b-2"
                         : "text-gray-900 font-semibold"
                     }`}
                >
                  درباره‌ما
                </Link>
                <Link
                  to="/projects"
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 hover:bg-gray-50
                     ${
                       path == "/projects"
                         ? "text-blue-700 font-bold  border-b-2"
                         : "text-gray-900 font-semibold"
                     }`}
                >
                  پروژه‌ها
                </Link>
              </div>
              <div className="py-6">
                <Link
                  to="/sign-in"
                  className={`-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold hover:bg-gray-50 ${
                    path == "/sign-in"
                      ? "text-blue-700 font-bold  border-b-2"
                      : "text-gray-900 font-semibold"
                  }`}
                >
                  ورود
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
