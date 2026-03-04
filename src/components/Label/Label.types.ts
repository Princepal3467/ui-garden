export interface LabelProps {
  text: string;
  color?: string;
  size?: "small" | "medium" | "large";
  weight?: "normal" | "bold";
  required?: boolean;
}