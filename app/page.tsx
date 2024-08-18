import { Achievements } from "@/components/shared/achievements";
import { Contact } from "@/components/shared/contact";
import { Experiences } from "@/components/shared/experiences";
import { Hero } from "@/components/shared/hero";
import { LinkMinimap } from "@/components/shared/link-minimap";
import { Projects } from "@/components/shared/projects";
import { Skills } from "@/components/shared/skills";
import { Socials } from "@/components/shared/socials";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="w-11/12 sm:w-3/4 lg:w-2/5 mx-auto flex flex-col gap-16 pt-20 pb-40 relative">
      <Hero />
      <Separator />
      <Achievements />
      <Separator />
      <Skills />
      <Separator />
      <Experiences />
      <Separator />
      <Projects />
      <Separator />
      <Contact />
      <Separator />
      <Socials />
      <LinkMinimap />
    </main>
  );
}
