import { Suspense } from "react";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SelectedWorksSection from "@/components/sections/SelectedWorksSection";
import TechStackSection from "@/components/sections/TechStackSection";
import ActivitySection from "@/components/sections/ActivitySection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ConnectSection from "@/components/sections/ConnectSection";
import { getGitHubActivity } from "@/lib/github";

async function ActivitySectionWrapper() {
  const githubData = await getGitHubActivity();
  return <ActivitySection initialData={githubData} />;
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SelectedWorksSection />
      <TechStackSection />
      <Suspense fallback={<ActivitySection />}>
        <ActivitySectionWrapper />
      </Suspense>
      <ExperienceSection />
      <ConnectSection />
    </>
  );
}

