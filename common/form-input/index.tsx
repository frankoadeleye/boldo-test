import { FormInputBlock } from "./styled";

type FormProps = {
  type: string;
  placeholder?: string;
};

function FormInput({ type, placeholder, ...otherProps }: FormProps) {
  return (
    <FormInputBlock type={type} placeholder={placeholder} {...otherProps} />
  );
}

export default FormInput;
