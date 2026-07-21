import type { ReactNode } from "react";

type MotionProviderProps = {
  children: ReactNode;
};

export function MotionProvider({ children }: MotionProviderProps) {
  return <>{children}</>;
}
