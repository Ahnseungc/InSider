export type InputType = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  disabled?: boolean;
  placeHolder?: string;
  type: string;
  style: string;
  id: string;
};
