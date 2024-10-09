'use client';

import { FC } from 'react';
import Link from 'next/link';
import { Input } from '../common/input';

const SignUpPage: FC = () => {
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
      <form action="/">
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
              <Input
                onChange={() => null}
                placeHolder="닉네임 입력"
                value={''}
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
                onChange={() => null}
                placeHolder="아이디 입력"
                value={''}
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
              <Input
                onChange={() => null}
                placeHolder="비밀번호 입력"
                value={''}
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
              <Input
                onChange={() => null}
                placeHolder="비밀번호 재입력"
                value={''}
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
            <div className="flex gap-[6px] mt-[12px]">
              <Input
                onChange={() => null}
                placeHolder="이메일 입력"
                value={''}
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
              <Input
                onChange={() => null}
                placeHolder="태어난 년도"
                value={''}
                type={''}
                style={
                  'w-[138px] h-[50px] rounded-[10px] border border-[#e1e1e1] pl-[16px]'
                }
                id={''}
              />
              <Input
                onChange={() => null}
                placeHolder="태어난 월"
                value={''}
                type={''}
                style={
                  'w-[138px] h-[50px] rounded-[10px] border border-[#e1e1e1] pl-[16px]'
                }
                id={''}
              />
              <Input
                onChange={() => null}
                placeHolder="태어난 일"
                value={''}
                type={''}
                style={
                  'w-[138px] h-[50px] rounded-[10px] border border-[#e1e1e1] pl-[16px]'
                }
                id={''}
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
              <div className="flex gap-[9.75px]">
                <input type="checkbox" />
                <p>남자</p>
              </div>

              <div className="flex gap-[9.75px]">
                <input type="checkbox" />
                <p>여자</p>
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
          <Link href={'/signup/success'}>
            <button className="w-[347px] h-[71px] rounded-[10px] bg-[#d9d9d9] text-lg font-bold text-white hover:bg-main">
              회원가입하기
            </button>
          </Link>
        </div>
      </form>
    </main>
  );
};

export default SignUpPage;
