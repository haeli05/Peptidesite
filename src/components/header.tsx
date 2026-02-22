"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const products = [
  { title: "Personalized GLP-1", href: "/weight-loss/personalized-glp-1", description: "Injectable personalized treatment" },
  { title: "Zepbound", href: "/weight-loss/zepbound", description: "Injectable weight loss" },
  { title: "Ozempic", href: "/weight-loss/ozempic", description: "Injectable GLP-1" },
  { title: "Wegovy", href: "/weight-loss/wegovy", description: "Injectable weight management" },
  { title: "Saxenda", href: "/weight-loss/saxenda", description: "Daily injectable" },
];

const intimacyProducts = [
  { title: "Sildenafil", href: "/sexual-health/sildenafil", description: "Pill for performance" },
  { title: "Tadalafil", href: "/sexual-health/tadalafil", description: "Long-lasting pill" },
  { title: "Viagra", href: "/sexual-health/viagra", description: "Brand medication" },
  { title: "Cialis", href: "/sexual-health/cialis", description: "Extended duration" },
];

const dailyHealthProducts = [
  { title: "NAD+", href: "/daily-health/nad-injections", description: "Anti-aging injections" },
  { title: "Sermorelin", href: "/daily-health/sermorelin", description: "Growth hormone support" },
  { title: "Methylene Blue", href: "/daily-health/methylene-blue", description: "Cognitive support" },
];

const hairProducts = [
  { title: "Finasteride", href: "/hair/finasteride", description: "Hair loss treatment" },
  { title: "Oral Minoxidil", href: "/hair/oral-minoxidil", description: "Hair growth pills" },
  { title: "Finasteride & Minoxidil Spray", href: "/hair/finasteride-minoxidil-spray", description: "Combination spray" },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#444444]/95 backdrop-blur supports-[backdrop-filter]:bg-[#444444]/90">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-[#FFDD00] tracking-wide" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>GOLD'S HEALTH</span>
        </Link>

        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className={isActive("/weight-loss") ? "text-[#FFDD00]" : "text-white bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-[#FFDD00]"}>
                  <span className="text-white hover:text-[#FFDD00] data-[state=open]:text-[#FFDD00]">Weight Loss</span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-[#FFDD00] to-[#FFD700] p-6 no-underline outline-none focus:shadow-md"
                          href="/weight-loss"
                        >
                          <span className="mb-2 text-lg font-semibold text-[#444444]">Weight Loss</span>
                          <p className="text-sm leading-tight text-[#444444]/80">
                            Achieve your weight loss goals with personalized GLP-1 treatments.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    {products.map((product) => (
                      <ListItem key={product.title} title={product.title} href={product.href}>
                        {product.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="data-[state=open]:text-[#FFDD00]">
                  <span className="text-white hover:text-[#FFDD00]">Better Intimacy</span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    {intimacyProducts.map((product) => (
                      <ListItem key={product.title} title={product.title} href={product.href}>
                        {product.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="data-[state=open]:text-[#FFDD00]">
                  <span className="text-white hover:text-[#FFDD00]">Daily Health</span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    {dailyHealthProducts.map((product) => (
                      <ListItem key={product.title} title={product.title} href={product.href}>
                        {product.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="data-[state=open]:text-[#FFDD00]">
                  <span className="text-white hover:text-[#FFDD00]">Hair Growth</span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    {hairProducts.map((product) => (
                      <ListItem key={product.title} title={product.title} href={product.href}>
                        {product.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/how-it-works" legacyBehavior passHref>
                  <NavigationMenuLink className="text-white hover:text-[#FFDD00]">
                    How It Works
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/login" className="hidden text-sm font-medium text-white hover:text-[#FFDD00] sm:block">
            Login
          </Link>
          <Button className="bg-[#FFDD00] hover:bg-[#FFD700] text-[#444444] font-semibold">Get Started</Button>
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#444444]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/weight-loss" className="text-lg font-medium text-white hover:text-[#FFDD00]" onClick={() => setIsOpen(false)}>
                  Weight Loss
                </Link>
                <Link href="/sexual-health" className="text-lg font-medium text-white hover:text-[#FFDD00]" onClick={() => setIsOpen(false)}>
                  Better Intimacy
                </Link>
                <Link href="/daily-health" className="text-lg font-medium text-white hover:text-[#FFDD00]" onClick={() => setIsOpen(false)}>
                  Daily Health
                </Link>
                <Link href="/hair" className="text-lg font-medium text-white hover:text-[#FFDD00]" onClick={() => setIsOpen(false)}>
                  Hair Growth
                </Link>
                <Link href="/how-it-works" className="text-lg font-medium text-white hover:text-[#FFDD00]" onClick={() => setIsOpen(false)}>
                  How It Works
                </Link>
                <Link href="/login" className="text-lg font-medium text-white hover:text-[#FFDD00]" onClick={() => setIsOpen(false)}>
                  Login
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#FFDD00] hover:text-[#444444] focus:bg-[#FFDD00] focus:text-[#444444]",
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

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}
