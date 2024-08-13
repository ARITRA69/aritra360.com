import { ModeToggle } from "@/components/theme/mode-toggle";
import { LINKS } from "@/constants";
import { bricolageGrotesque } from "@/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const NavigationBar = () => {
  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 w-11/12 md:w-2/5 p-2 pl-6 bg-gradient-to-tr from-transparent to-foreground/5 border border-foreground/15 rounded-2xl flex items-center justify-between backdrop-blur-md">
      <h1 className={cn(bricolageGrotesque, "font-bold")}>Aritra</h1>
      <div className="flex items-center gap-4">
        {LINKS.map((link, i) => (
          <Link key={i} href={link.href} className="text-sm">
            {link.name}
          </Link>
        ))}
        <ModeToggle />
      </div>
    </div>
  );
};