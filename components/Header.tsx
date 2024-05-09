'use client';

import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react';
import { Bars3Icon, ChevronDownIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import { Fragment, useState } from 'react';

function Header() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  return (
    <header className="bg-[#013B94]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 text-white">
            <span className="sr-only">Booking.com</span>
            <h1>Booking.com</h1>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white">
            <span className="sr-only">Open Main Menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <Popover className="hidden lg:flex lg:gap-x-12 relative">
          <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white p-1">
            Stays
            <ChevronDownIcon className="h-5 w-5 flex-none text-white" />
          </PopoverButton>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-0"
            enterTo="opacity-100 translate-y-1"
            leave="transition ease-in duration-150"
            leaveTo="opacity-0 translate-y-1"
            leaveFrom="opacity-100 translate-y-0"
          >
            <PopoverPanel className="absolute bg-white -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl shadow-lg ring-1 ring-gray-900/5">
              DUDE
            </PopoverPanel>
          </Transition>
        </Popover>
      </nav>
    </header>
  );
}

export default Header;
