export interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  backgroundColor?: string;
  disabled?: boolean;
  onClick?: () => void;
}
