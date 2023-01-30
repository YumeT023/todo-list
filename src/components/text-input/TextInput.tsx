import { InputHTMLAttributes } from "react";
import { joinClassname } from "../../utils/join-classname";
import "./TextInput.css";

export type TextInputProps = Exclude<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
>;

export const TextInput = ({ className = "", ...rest }: TextInputProps) => {
  return (
    <input
      type="text"
      className={joinClassname("text-input", className)}
      {...rest}
    />
  );
};
