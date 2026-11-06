import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SelectedWorksSection from "@/components/sections/SelectedWorksSection";
import TechStackSection from "@/components/sections/TechStackSection";
import ActivitySection from "@/components/sections/ActivitySection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ConnectSection from "@/components/sections/ConnectSection";
import { getGitHubActivity } from "@/lib/github";

export default async function Home() {
  const githubData = await getGitHubActivity();

  return (
    <>
      <HeroSection />
      <AboutSection />
      <SelectedWorksSection />
      <TechStackSection />
      <ActivitySection initialData={githubData} />
      <ExperienceSection />
      <ConnectSection />
    </>
  );
}

