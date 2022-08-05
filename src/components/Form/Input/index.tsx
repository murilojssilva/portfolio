import { useField } from "@unform/core";
import { useEffect, useRef } from "react";

interface InputProps {
  name: string;
}

export function Input({ name, ...rest }: InputProps) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return <input ref={inputRef} defaultValue={defaultValue} {...rest} />;
}
