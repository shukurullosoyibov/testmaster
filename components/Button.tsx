"use client";
import {
  Dispatch,
  SetStateAction,
  DetailedHTMLProps,
  ButtonHTMLAttributes,
} from "react";
import { IconType } from "react-icons";

type TButtonProps = {
  type: "button" | "reset" | "submit" | undefined;
  onClick?: () => void | Dispatch<SetStateAction<boolean>>;
  className?: string;
  title?: string;
  text?: string;
  Icon?: IconType;
  isLoading?: boolean;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button = ({
  type,
  onClick,
  className,
  title,
  text,
  Icon,
  isLoading,
  ...props
}: TButtonProps) => {
  return (
    <button
      aria-label={title}
      disabled={isLoading}
      role="button"
      title={title}
      type={type}
      onClick={onClick}
      className={className}
      {...props}
    >
      {Icon ? (
        <Icon className="h-7 w-7 text-black" />
      ) : !isLoading ? (
        text
      ) : (
        "Loading..."
      )}
    </button>
  );
};
