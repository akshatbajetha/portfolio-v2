import type { Metadata, Viewport } from "next";
import { BootScreen } from "@/components/os/BootScreen";

export const metadata: Metadata = {
  title: "Playground | Akshat Bajetha",
  description: "An interactive, OS-themed version of Akshat Bajetha's portfolio.",
  alternates: { canonical: "/playground" },
};

// The OS UI handles its own gestures, so pinch-zoom is disabled only here.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function PlaygroundLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-dvh overflow-hidden overscroll-none">
      <BootScreen />
      {children}
    </div>
  );
}
