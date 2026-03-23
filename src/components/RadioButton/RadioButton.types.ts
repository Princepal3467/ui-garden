export interface RadioButtonProps {
  label: string;
  name: string;
  checked?: boolean;
  disabled?: boolean;
  color?: string;
  labelColor?: string;
  size?: "small" | "medium" | "large";
  onChange?: () => void;
}
