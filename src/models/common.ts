import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

// interface FormValues {
//   field: string; // 폼 데이터의 필드를 정의합니다.
// }

export type InputType<T extends FieldValues> = {
  field: Path<T>;
  register: UseFormRegister<T>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  disabled?: boolean;
  placeHolder?: string;
  type: string;
  style: string;
  id: string;
  required?: boolean;
  maxLength?: number;
  pattern?: {
    value: RegExp;
    message: string;
  };
};
