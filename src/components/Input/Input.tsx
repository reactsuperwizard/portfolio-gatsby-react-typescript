import React from "react";
import { FieldError } from "react-hook-form";
import { Text } from "../Text";
import * as Styles from "./input.styles";

interface InputsProps {
  type: "text" | "textarea" | "email";
  label: string;
  placeholder: string;
  register: any;
  name: string;
  error?: FieldError | undefined;
}

const Input: React.FC<InputsProps> = ({
  type,
  label,
  placeholder,
  register,
  error,
  name,
}) => {
  return (
    <Styles.Root>
      <Styles.Label htmlFor={label}>{label}</Styles.Label>
      {type !== "textarea" ? (
        <Styles.Input
          {...register}
          name={name}
          id={label}
          type={type}
          placeholder={placeholder}
        />
      ) : (
        <Styles.TextArea
          {...register}
          placeholder={placeholder}
          id={label}
          name={name}
        />
      )}
      {error ? (
        <Text as="p" fontSize="sm" color="red">
          {error?.message}
        </Text>
      ) : null}
    </Styles.Root>
  );
};

export { Input };
