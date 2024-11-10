export type SignUp = {
  userId: string;
  password: string;
  passwordCheck: string;
  nickName: string;
  email: string;
  br_year: string;
  br_month: string;
  br_day: string;
  gender: string;
};

export type reqSignUp = {
  userId: string;
  password: string;
  nickName: string;
  email: string;
  birthDate: string;
  gender: string;
};

export type SignIn = {
  userId: string;
  password: string;
};
