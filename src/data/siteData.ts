import { Cpu, Shield, Zap, Bot, type LucideIcon } from "lucide-react"
import image1 from "@/assets/carousel/image1.png"
import image2 from "@/assets/carousel/image2.png"
import image3 from "@/assets/carousel/image3.png"
import image4 from "@/assets/carousel/image4.png"
import image5 from "@/assets/carousel/image5.png"
import image6 from "@/assets/carousel/image6.png"

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
  { imageSrc: image1 },
  { imageSrc: image2 },
  { imageSrc: image3 },
  { imageSrc: image4 },
  { imageSrc: image5 },
  { imageSrc: image6 },
]