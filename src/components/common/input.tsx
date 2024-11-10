import { FieldValues } from 'react-hook-form';
import { InputType } from '@/models';

export const Input = <T extends FieldValues>({
  onChange,
  value,
  disabled,
  placeHolder,
  type,
  style,
  id,
  register,
  maxLength,
  field,
  required,
  pattern,
}: InputType<T>) => {
  return (
    <input
      {...register(field, {
        required,
        pattern,
      })}
      className={`${style}`}
      type={type}
      maxLength={maxLength}
      onChange={onChange}
      value={value}
      disabled={disabled}
      placeholder={placeHolder}
      id={id}
    />
  );
};
