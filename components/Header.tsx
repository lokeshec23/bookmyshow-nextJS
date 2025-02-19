"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string }[] = [
  {
    title: "Personal Information",
    href: "/",
  },
  {
    title: "Change Password",
    href: "/",
  },
  // {
  //   title: "Progress",
  //   href: "/docs/primitives/progress",
  //   description:
  //     "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  // },
  // {
  //   title: "Scroll-area",
  //   href: "/docs/primitives/scroll-area",
  //   description: "Visually or semantically separates content.",
  // },
  // {
  //   title: "Tabs",
  //   href: "/docs/primitives/tabs",
  //   description:
  //     "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  // },
  // {
  //   title: "Tooltip",
  //   href: "/docs/primitives/tooltip",
  //   description:
  //     "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  // },
];

export default function Header() {
  return (
    <header className="flex justify-between items-center px-3 py-1 shadow-md bg-white">
      <div className="flex gap-3 items-center">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Welcome, Lokesh
          </h2>
          {/* <h4 className="text-sm text-gray-600">Full Stack Developer</h4> */}
        </div>
      </div>
      <NavigationMenu>
        <NavigationMenuList className="flex gap-4 items-center">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-all">
              Profile
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white shadow-lg rounded-md p-2">
              <ul className="flex flex-col w-[200px]">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    href={component.href}
                    className="p-2 hover:bg-gray-100 rounded-md"
                  >
                    <span className="text-gray-700">{component.title}</span>
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/" passHref>
              <NavigationMenuLink className="px-4 py-2 rounded-md text-red-600 font-medium hover:bg-red-100 transition-all">
                Logout
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
