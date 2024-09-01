import { FC } from 'react';
import { InputType } from '@/models';

export const Input: FC<InputType> = ({
  onChange,
  value,
  disabled,
  placeHolder,
  type,
  style,
  id,
}) => {
  return (
    <input
      className={`${style}`}
      type={type}
      onChange={onChange}
      value={value}
      disabled={disabled}
      placeholder={placeHolder}
      id={id}
    />
  );
};
