"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const navOptions = [
    {
      link: "/",
      title: "Home Page",
      heading: "Home",
    },
     {
      heading: "Journals",
      tree: [
        {
          link: "/journals",
          title: " Our Journals",
          heading: "Our Journals",
        },
        {
          link: "/associated-journals",
          title: "Associated Journals",
          heading: "Associated Journals",
        },
      ],
    },
    {
      link: "/blogs",
      title: "Blog Page",
      heading: "Blogs",
    },
    {
      link: "/books",
      title: "Books Page",
      heading: "Books",
    },
   
    {
      link: "/services",
      title: "Services Page",
      heading: "Services",
    },
    {
      heading: "Submission",
      tree: [
        {
          link: "/submission/guidelines",
          title: "Submission Guidelines",
          heading: "Submission Guidelines",
        },
        {
          link: "/submission/onlinesubmission",
          title: "Online Submission",
          heading: "Online Submission",
        },
      ],
    },
  ];
  return (
    <>
    <header
  className="
    fixed left-0 top-0 z-[111]
    flex w-full items-center justify-between
    px-[8%] py-3
    bg-white/95
    backdrop-blur-xl
    border-b border-[#012D68]/10
    shadow-[0_8px_30px_rgba(1,45,104,0.07)]
    max-[1080px]:px-4
  "
>
  {/* Logo */}
  <div className="part1 w-full">
    <Link
      href="/"
      title="home page"
      className="block w-fit"
    >
      <Image
        src="/images/iarapublication-logo.png"
        width={0}
        height={0}
        sizes="100vw"
        alt="Iara Publication Logo"
        className="
          w-[135px]
          transition-transform duration-300
          hover:scale-[1.03]
        "
      />
    </Link>
  </div>

  {/* Desktop Navigation */}
<nav className="part2 flex w-full items-center justify-end gap-3 whitespace-nowrap max-[950px]:hidden">
  <ul className="flex items-center justify-end gap-1 whitespace-nowrap">
      {navOptions.map((option, index) => (
       <li key={index} className="shrink-0">
          {option.link ? (
            <Link
              href={option.link}
              title={option.title}
              className="
                relative
                px-3 py-2
                text-[14px]
                font-medium
                text-[#3A4358]
                transition-all duration-300
                hover:text-[#012D68]

                after:absolute
                after:left-1/2
                after:bottom-0
                after:h-[2px]
                after:w-0
                after:-translate-x-1/2
                after:rounded-full
                after:bg-[#D69B23]
                after:transition-all
                after:duration-300

                hover:after:w-[65%]
              "
            >
              {option.heading}
            </Link>
          ) : (
           <NavigationMenu className="shrink-0">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className="
                      bg-transparent
                      px-3 py-2
                      text-[14px]
                      font-medium
                      text-[#3A4358]
                      transition-all duration-300
                      hover:bg-[#F7F9FC]
                      hover:text-[#012D68]
                      data-[state=open]:bg-[#F7F9FC]
                      data-[state=open]:text-[#012D68]
                    "
                  >
                    {option.heading}
                  </NavigationMenuTrigger>

                  <NavigationMenuContent
                    className="
                      overflow-hidden
                      rounded-2xl
                      border border-[#012D68]/10
                      bg-white
                      p-2
                      shadow-[0_18px_45px_rgba(1,45,104,0.12)]
                    "
                  >
                    <ul className="min-w-[220px]">
                      {option.tree.map((item, index) => (
                        <li key={index}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.link}
                              title={item.title}
                              className="
                                block
                                rounded-xl
                                px-4 py-3
                                text-nowrap
                                text-[14px]
                                font-medium
                                text-[#475569]
                                transition-all duration-300

                                hover:bg-[#FFF8E8]
                                hover:text-[#012D68]
                                hover:translate-x-1
                              "
                            >
                              {item.heading}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          )}
        </li>
      ))}
    </ul>

    {/* Contact Button */}
    <Link href="/contact">
      <button
        className="
          group
          relative
          overflow-hidden
          whitespace-nowrap
          rounded-xl
          border border-[#012D68]
          bg-[#012D68]
          px-5 py-2.5
          text-[14px]
          font-semibold
          text-white
          shadow-[0_8px_20px_rgba(1,45,104,0.16)]
          transition-all duration-300

          hover:-translate-y-[2px]
          hover:border-[#D69B23]
          hover:bg-[#D69B23]
          hover:shadow-[0_12px_25px_rgba(214,155,35,0.22)]
        "
      >
        Contact
      </button>
    </Link>
  </nav>

  {/* Mobile Navigation */}
  <nav className="block min-[950px]:hidden">
    <div>
      <button
        className="
          flex h-11 w-11
          cursor-pointer
          items-center justify-center
          rounded-xl
          border border-[#012D68]/10
          bg-[#F7F9FC]
          text-[#012D68]
          transition-all duration-300
          hover:border-[#D69B23]/40
          hover:bg-[#FFF8E8]
          hover:text-[#D69B23]
        "
        onClick={() => setShowMenu((prev) => !prev)}
      >
        <Menu size={22} />
      </button>

      <div
        className={
          `
          menu
          absolute left-0 top-[72px] z-[11]
          flex h-fit w-full flex-col
          items-center
          border-t border-[#012D68]/10
          bg-white/98
          px-5 py-8
          shadow-[0_20px_40px_rgba(1,45,104,0.10)]
          backdrop-blur-xl
          transition-all duration-300
          ` +
          (showMenu
            ? " block translate-y-0 opacity-100"
            : " hidden -translate-y-5 opacity-0")
        }
      >
        <ul className="flex w-full flex-col gap-3">
          {navOptions.map((option, index) => (
            <li key={index} className="w-full">
              {option.link ? (
                <Link
                  href={option.link}
                  title={option.title}
                  className="
                    block w-full
                    rounded-xl
                    px-4 py-3
                    text-[15px]
                    font-medium
                    text-[#3A4358]
                    transition-all duration-300
                    hover:bg-[#F7F9FC]
                    hover:text-[#012D68]
                  "
                  onClick={() => setShowMenu(false)}
                >
                  {option.heading}
                </Link>
              ) : (
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger
                        className="
                          w-full
                          bg-transparent
                          px-4 py-3
                          text-[15px]
                          font-medium
                          text-[#3A4358]
                          hover:bg-[#F7F9FC]
                          hover:text-[#012D68]
                        "
                      >
                        {option.heading}
                      </NavigationMenuTrigger>

                      <NavigationMenuContent
                        className="
                          rounded-2xl
                          border border-[#012D68]/10
                          bg-white
                          p-2
                          shadow-xl
                        "
                      >
                        <ul className="min-w-[220px]">
                          {option.tree.map((item, index) => (
                            <li key={index}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={item.link}
                                  title={item.title}
                                  className="
                                    block
                                    rounded-lg
                                    px-4 py-3
                                    text-nowrap
                                    text-[14px]
                                    text-[#475569]
                                    transition-all duration-300
                                    hover:bg-[#FFF8E8]
                                    hover:text-[#012D68]
                                  "
                                  onClick={() => setShowMenu(false)}
                                >
                                  {item.heading}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              )}
            </li>
          ))}

          <li className="mt-3 w-full">
            <Link
              href="/contact"
              onClick={() => setShowMenu(false)}
            >
              <button
                className="
                  w-full
                  rounded-xl
                  border border-[#012D68]
                  bg-[#012D68]
                  px-5 py-3
                  text-[15px]
                  font-semibold
                  text-white
                  transition-all duration-300
                  hover:border-[#D69B23]
                  hover:bg-[#D69B23]
                "
              >
                Contact
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>
    </>
  );
}
