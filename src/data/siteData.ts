import { Cpu, Shield, Zap, Bot, type LucideIcon } from "lucide-react"

export interface BuiltForItem {
  icon: LucideIcon;
  label: string;
  color: string;
}

export interface CarouselSlide {
  imageSrc: string;
}

export const builtForItems: BuiltForItem[] = [
  { icon: Cpu, label: "Embedded System", color: "from-white to-slate-100" },
  { icon: Bot, label: "Robotics", color: "from-white to-slate-100" },
  { icon: Zap, label: "Automotive", color: "from-white to-slate-100" },
  { icon: Shield, label: "Defence", color: "from-white to-slate-100" },
]

export const carouselSlides: CarouselSlide[] = [
  { imageSrc: "./src/assets/carousel/image1.png" },
  { imageSrc: "./src/assets/carousel/image2.png" },
  { imageSrc: "./src/assets/carousel/image3.png" },
  { imageSrc: "./src/assets/carousel/image4.png" },
  { imageSrc: "./src/assets/carousel/image5.png" },
  { imageSrc: "./src/assets/carousel/image6.png" },
]