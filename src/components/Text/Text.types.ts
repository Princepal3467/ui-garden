export interface TextProps {
  children: React.ReactNode;
  color?: string;
  size?: "small" | "medium" | "large";
  weight?: "normal" | "bold";
  align?: "left" | "center" | "right";
  variant?: "p" | "span" | "h1" | "h2" | "h3";
}