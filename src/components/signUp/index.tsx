'use client';

import { FC, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Input } from '../common/input';
import { SignUp } from '@/models/sign';
import useSignUp from '@/hooks/useSignUp';

const SignUpPage: FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
  } = useForm<SignUp>();
  const { mutate: signUp } = useSignUp();
  const onSubmit: SubmitHandler<SignUp> = async data => {
    await signUp(
      {
        userId: data.userId,
        password: data.password,
        nickName: data.nickName,
        email: data.email,
        birthDate: `${data.br_year}${data.br_month}${data.br_month}`,
        gender: 'F',
      },
      {
        onSuccess: res => {
          console.log(res);
        },
        onError: error => {
          console.error('회원 가입 실패:', error);
        },
      }
    );
  };

  const password = watch('password');
  const passwordCheck = watch('passwordCheck');

  useEffect(() => {
    if (passwordCheck && passwordCheck !== password) {
      setError('passwordCheck', {
        type: 'manual',
        message: '비밀번호가 일치하지 않습니다.',
      });
    } else {
      setError('passwordCheck', { type: 'manual', message: '' });
    }
  }, [password, passwordCheck, setError]);

  return (
    <main className=" w-full h-full flex flex-col items-center">
      <div className="pt-[113px]">
        <h1 className="text-[32px] font-bold text-center text-[#242424]">
          회원가입
        </h1>
        <h2 className="text-lg font-medium text-center text-[#616161]">
          회원가입을 통해 더 많은 토론에 참여해보세요
        </h2>
      </div>
      <form action="/" onSubmit={handleSubmit(onSubmit)}>
        <div className="border-b w-full pt-[73px] pb-[49px]">
          <div>
            <p className="text-lg font-medium text-left">
              <span className="text-lg font-medium text-left text-[#343434]">
                닉네임
              </span>
              <span className="text-lg font-medium text-left text-[#242424]">
                {' '}
              </span>
              <span className="text-lg font-medium text-left text-[#da4f51]">
                *
              </span>
            </p>
            <label htmlFor=""></label>
            <div className="flex gap-[6px] mt-[12px]">
              <Input<SignUp>
                register={register}
                field="nickName"
                placeHolder="닉네임 입력"
                type={''}
                style={
                  'w-[616px] h-[50px] rounded-[10px] border border-[#e1e1e1] pl-[16px]'
                }
                id={''}
              />

              <button className="w-[120.1px] h-[51.77px] rounded-[9.32px] bg-[#d9d9d9]">
                중복확인
              </button>
            </div>
            {errors.nickName && (
              <p className="text-sm font-medium text-left text-[#ff5c00]">
                {errors.nickName.message}
              </p>
            )}
          </div>
          <div>
            <p className="text-lg font-medium text-left mt-[60px]">
              <span className="text-lg font-medium text-left text-[#343434]">
                아이디
              </span>
              <span className="text-lg font-medium text-left text-[#242424]">
                {' '}
              </span>
              <span className="text-lg font-medium text-left text-[#da4f51]">
                *
              </span>
            </p>
            <label htmlFor=""></label>
            <div className="flex gap-[6px] mt-[12px]">
              <Input
                register={register}
                field="userId"
                placeHolder="아이디 입력"
                type={''}
                style={
                  'w-[616px] h-[50px] rounded-[10px] border border-[#e1e1e1] pl-[16px]'
                }
                id={''}
                required={true}
                pattern={{
                  value: /^[a-z0-9]{4,12}$/,
                  message: '4~12자의 영문(소문자)과 숫자만 사용가능',
                }}
              />
              <button className="w-[120.1px] h-[51.77px] rounded-[9.32px] bg-[#d9d9d9]">
                중복확인
              </button>
            </div>
            {errors.userId && (
              <p className="text-sm font-medium text-left text-[#ff5c00]">
                {errors.userId.message}
              </p>
            )}
          </div>
          <div className="mt-[60px]">
            <label htmlFor=""></label>
            <p className="text-lg font-medium text-left">
              <span className="text-lg font-medium text-left text-[#343434]">
                비밀번호
              </span>
              <span className="text-lg font-medium text-left text-[#242424]">
                {' '}
              </span>
              <span className="text-lg font-medium text-left text-[#da4f51]">
                *
              </span>
            </p>
            <div className="flex gap-[6px] mt-[12px]">
              <Input<SignUp>
                register={register}
                field="password"
                placeHolder="비밀번호 입력"
                type="password"
                style={
                  'w-[616px] h-[50px] rounded-[10px] border border-[#e1e1e1] pl-[16px]'
                }
                id={''}
                required={true}
                pattern={{
                  value: /^[a-z0-9]{4,12}$/,
                  message: '4~12자의 영문(소문자)과 숫자만 사용가능',
                }}
              />
            </div>
            {errors.password && (
              <p className="text-sm font-medium text-left text-[#ff5c00]">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="mt-[60px]">
            <label htmlFor=""></label>
            <p className="text-lg font-medium text-left">
              <span className="text-lg font-medium text-left text-[#343434]">
                비밀번호 확인
              </span>
              <span className="text-lg font-medium text-left text-[#242424]">
                {' '}
              </span>
              <span className="text-lg font-medium text-left text-[#da4f51]">
                *
              </span>
            </p>
            <div className="flex gap-[6px] mt-[12px]">
              <Input<SignUp>
                register={register}
                field="passwordCheck"
                placeHolder="비밀번호 재입력"
                type="password"
                style={
                  'w-[616px] h-[50px] rounded-[10px] border border-[#e1e1e1] pl-[16px]'
                }
                id={'passwordCheck'}
                required={true}
                pattern={{
                  value: /^[a-z0-9]{4,12}$/,
                  message: '4~12자의 영문(소문자)과 숫자만 사용가능',
                }}
              />
            </div>
            {errors.passwordCheck && (
              <p className="text-sm font-medium text-left text-[#ff5c00]">
                {errors.passwordCheck.message}
              </p>
            )}
          </div>
          <div className="mt-[60px]">
            <label htmlFor=""></label>
            <p className="text-lg font-medium text-left">
              <span className="text-lg font-medium text-left text-[#343434]">
                이메일
              </span>
              <span className="text-lg font-medium text-left text-[#242424]">
                {' '}
              </span>
              <span className="text-lg font-medium text-left text-[#da4f51]">
                *
              </span>
            </p>
            <div className="flex flex-col gap-[6px] mt-[12px]">
              <Input<SignUp>
                register={register}
                field="email"
                required={true}
                pattern={{
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: '유효한 이메일 주소를 입력하세요.',
                }}
                onChange={() => null}
                placeHolder="이메일 입력"
                type={''}
                style={
                  'w-[616px] h-[50px] rounded-[10px] border border-[#e1e1e1] pl-[16px]'
                }
                id={''}
              />
              {errors.email && (
                <p className="text-sm font-medium text-left text-[#ff5c00]">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>
          <div className="mt-[60px]">
            <p className="text-lg font-medium text-left">
              <span className="text-lg font-medium text-left text-[#343434]">
                생년월일
              </span>
              <span className="text-lg font-medium text-left text-[#242424]">
                {' '}
              </span>
              <span className="text-lg font-medium text-left text-[#da4f51]">
                *
              </span>
            </p>
            <div className="flex gap-[20px] mt-[12px]">
              {/* <CalendarComponent value={value} onChange={onChange} /> */}
              <Input<SignUp>
                onChange={() => null}
                register={register}
                field="br_year"
                placeHolder="태어난 년도"
                type={''}
                style={
                  'w-[138px] h-[50px] rounded-[10px] border border-[#e1e1e1] pl-[16px]'
                }
                id={''}
                maxLength={4}
              />
              <Input<SignUp>
                register={register}
                field="br_month"
                placeHolder="태어난 월"
                type={''}
                style={
                  'w-[138px] h-[50px] rounded-[10px] border border-[#e1e1e1] pl-[16px]'
                }
                id={''}
                maxLength={2}
              />
              <Input<SignUp>
                register={register}
                field="br_day"
                placeHolder="태어난 일"
                type={''}
                style={
                  'w-[138px] h-[50px] rounded-[10px] border border-[#e1e1e1] pl-[16px]'
                }
                id={''}
                maxLength={2}
              />
            </div>
          </div>
          <div className="mt-[60px]">
            <p className="text-lg font-medium text-left">
              <span className="text-lg font-medium text-left text-[#343434]">
                성별
              </span>
              <span className="text-lg font-medium text-left text-[#242424]">
                {' '}
              </span>
              <span className="text-lg font-medium text-left text-[#da4f51]">
                *
              </span>
            </p>
            <div className="flex gap-[67.5px]">
              <div className="flex gap-[9.75px] items-center">
                <input
                  id="male"
                  type="checkbox"
                  value=""
                  className="hidden w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "
                />
                <label
                  htmlFor="male"
                  className="text-lg font-medium text-left text-[#343434]"
                >
                  남자
                </label>
              </div>
              <div className="flex gap-[9.75px]">
                <input
                  id="female"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="female"
                  className="text-lg font-medium text-left text-[#343434]"
                >
                  여자
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[48px]">
          <div className="text-lg font-bold text-left text-[#343434] flex gap-[20px]">
            <input type="checkbox" />
            모든 약관에 동의합니다.
          </div>
          <div className="flex mt-[37px] gap-[22px]">
            <input type="checkbox" />
            <p className="text-lg text-left">
              <span className="text-lg font-bold text-left text-[#ff5c00]">
                [필수]
              </span>
              <span className="text-lg font-bold text-left text-[#242424]"></span>
              <span className="text-lg font-medium text-left text-neutral-600">
                인싸이더 홈페이지 이용약관 동의
              </span>
            </p>
          </div>
          <div className="flex mt-[40px] gap-[22px]">
            <input type="checkbox" />
            <p className="text-lg text-left">
              <span className="text-lg font-bold text-left text-[#ff5c00]">
                [필수]
              </span>
              <span className="text-lg font-bold text-left text-[#242424]"></span>
              <span className="text-lg font-medium text-left text-neutral-600">
                개인정보 제공 동의
              </span>
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center items-center mt-[71px]">
          <button className="w-[347px] h-[71px] rounded-[10px] bg-[#d9d9d9] text-lg font-bold text-white hover:bg-main">
            회원가입하기
          </button>
        </div>
      </form>
    </main>
  );
};

export default SignUpPage;
