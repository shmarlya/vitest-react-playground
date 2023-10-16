import React, { useState, ChangeEvent } from "react";

type TextInputProps = {
  value: string;
  onChange: (value: string) => void;
  validationRule?: (value: string) => boolean;
};

const TextInput: React.FC<TextInputProps> = ({
  value,
  onChange,
  validationRule,
}) => {
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (validationRule && !validationRule(inputValue)) {
      setError("Invalid input");
    } else {
      setError(null);
    }
    onChange(inputValue);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleInputChange} />
      <p data-testid="error-message" style={{ color: "red" }}>
        {error ? error : null}
      </p>
    </div>
  );
};

export default TextInput;
