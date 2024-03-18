import {
  GatherInformation,
  LaunchBusiness,
  RegisterBusiness,
  TeamIcon,
} from "@/public/assets/img";
import { Features } from "@/types";

export const features: Features[] = [
  {
    src: GatherInformation,
    title: "Gather Information",
    text: `Analyse your business & competition`,
  },
  {
    src: RegisterBusiness,
    title: "Register Your Business",
    text: `Decide the category of your business and register it.`,
  },
  {
    src: LaunchBusiness,
    title: "Launch Your Business",
    text: `Renting office, Press Release, Website Design`,
  },
  {
    src: TeamIcon,
    title: "Build Your Team",
    text: `Recruit and train competent professionals.`,
  },
];
