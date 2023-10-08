import { ReactNode } from "react";

interface Props {
  container?: string;
  type: string;
  name: string;
  size?: string;
  children: ReactNode;
}

const InputContainer = ({ container, type, name, size, children }: Props) => {
  return (
    <div className={container ? "flex gap--sm" : "input__container"}>
      <input
        type={type}
        id={name}
        className={
          (size === "lg" && "input--lg") || (size == "none" ? "" : "input")
        }
      />
      <label htmlFor={name}>{children}</label>
    </div>
  );
};

export default InputContainer;
