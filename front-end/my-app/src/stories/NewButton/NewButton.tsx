import React from 'react';
import './NewButton.css';

interface NewButtonProps {
    primary?: boolean;
    backgroundColor?: string;
    size?: "small" | "medium" | "large";
    label: string;
    onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const NewButton = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: NewButtonProps) => {
  const mode = primary ? "button--primary" : "button--secondary";
  return (
    <button
      type="button"
      className={["button", `button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
