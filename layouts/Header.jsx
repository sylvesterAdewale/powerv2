import Social from "@components/Social"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"

const Header = () => {
  const [isNav, setNav] = useState(true)

  return (
    <header className="flex items-center justify-between gap-4 md:px-16 px-5 py-3">
      <div className="flex items-center flex-1 lg:flex-none">
        <div className="w-8 h-8 relative">
          <Image src="/assets/power-head2.png" alt="logo" layout="fill" objectFit="contain" />
        </div>
        <h1 className="font-bold md:text-xl uppercase trispace">Power</h1>
      </div>
      <nav className="hidden lg:block">
        <ul className="flex gap-7 items-center text-sm">
          <li>
            <Link href="/" passHref>
              <a className="trispace uppercase font-semibold">
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/dictum" passHref>
              <a className="trispace uppercase font-semibold">
                Dictum
              </a>
            </Link>
          </li>
          <li>
            <Link href="/team" passHref>
              <a className="trispace uppercase font-semibold">
                Team
              </a>
            </Link>
          </li>
          <li>
            <Link href="/powermap" passHref>
              <a className="trispace uppercase font-semibold">
                Powermap
              </a>
            </Link>
          </li>
          <li>
            <a href="/whitepaper.pdf" download="whitepaper" className="trispace uppercase font-semibold">
              Whitepaper
            </a>
          </li>
          <li>
            <Link href="/icons" passHref>
              <a className="trispace uppercase font-semibold">
                Icons
              </a>
            </Link>
          </li>
          <li>
            <Link href="/faqs" passHref>
              <a className="trispace uppercase font-semibold">
                Faqs
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <nav className={`lg:hidden z-50 bg-orange-100 p-5 md:px-16 fixed h-[90vh] transform top-[10vh] left-0 w-screen ${isNav ? "-translate-x-[100vw]" : "translate-x-0"} ease-in-out transition-transform duration-200`}>
        <ul className="flex gap-10 flex-col items-start text-sm">
          <li>
            <Link href="/" passHref>
              <a className="trispace uppercase font-semibold flex flex-col">
                Home
                <span className="text-slate-500  manrope capitalize text-xs">*// Go Home //*</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/dictum" passHref>
              <a className="trispace uppercase font-semibold flex flex-col">
                Dictum
                <span className="text-slate-500  manrope capitalize text-xs">*// What we&apos;re about //*</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/team" passHref>
              <a className="trispace uppercase font-semibold flex flex-col">
                Team
                <span className="text-slate-500  manrope capitalize text-xs">*// Our Founders //*</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/powermap" passHref>
              <a className="trispace uppercase font-semibold flex flex-col">
                Powermap
                <span className="text-slate-500  manrope capitalize text-xs">*// Our Journey //*</span>
              </a>
            </Link>
          </li>
          <li>
            <a className="trispace uppercase font-semibold flex flex-col">
              Whitepaper
              <span className="text-slate-500  manrope capitalize text-xs">*// Download the Whitepaper //*</span>
            </a>
          </li>
          <li>
            <Link href="/icons" passHref>
              <a className="trispace uppercase font-semibold flex flex-col">
                Icons
                <span className="text-slate-500  manrope capitalize text-xs">*// Check out our icons //*</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/faqs" passHref>
              <a className="trispace uppercase font-semibold flex flex-col">
                Faqs
                <span className="text-slate-500  manrope capitalize text-xs">*// Answers to your questions //*</span>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <Social />
      <div onClick={() => setNav(!isNav)} className="lg:hidden p-2 md:p-3 bg-orange-100 md:text-xl rounded-md">
        {isNav ? <FiMenu /> : <FiX />}
      </div>
    </header>
  )
}

export default Header