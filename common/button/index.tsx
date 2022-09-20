import { ButtonBlock } from "./styled";
import { ButtonProps } from "./types";

function Button({ text, Size }: ButtonProps) {
  return <ButtonBlock Size={Size}>{text}</ButtonBlock>;
}

export default Button;
