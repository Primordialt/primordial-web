"use client";

import {
  Building2,
  Briefcase,
  Cable,
  Code2,
  Eye,
  Factory,
  Globe2,
  Handshake,
  Landmark,
  Lightbulb,
  Package,
  Palette,
  PenTool,
  Radio,
  Server,
  Shield,
  Smartphone,
  Target,
  Users,
  Wifi,
  Zap,
  type LucideIcon,
} from "lucide-react";

import type {
  AboutIconKey,
  HomepageIndustryIconKey,
  HomepageServiceIconKey,
  ServicePageIconKey,
} from "@/lib/icon-keys";

export const homepageServiceIcons: Record<HomepageServiceIconKey, LucideIcon> = {
  shield: Shield,
  code2: Code2,
  radio: Radio,
  server: Server,
  globe2: Globe2,
  wifi: Wifi,
};

export const homepageIndustryIcons: Record<HomepageIndustryIconKey, LucideIcon> = {
  landmark: Landmark,
  building2: Building2,
  factory: Factory,
  smartphone: Smartphone,
  globe2: Globe2,
};

export const servicePageIcons: Record<ServicePageIconKey, LucideIcon> = {
  briefcase: Briefcase,
  shield: Shield,
  smartphone: Smartphone,
  "pen-tool": PenTool,
  palette: Palette,
  code2: Code2,
  radio: Radio,
  package: Package,
  cable: Cable,
};

export const aboutIcons: Record<AboutIconKey, LucideIcon> = {
  target: Target,
  eye: Eye,
  shield: Shield,
  lightbulb: Lightbulb,
  handshake: Handshake,
  zap: Zap,
  users: Users,
};
