import Link from 'next/link';
import { GoogleLogin } from '../common/Icon';

const SignInPage = () => {
  return (
    <section className="flex flex-col w-full items-center pt-[100px]">
      <h1 className="text-[44px] font-bold text-left text-black">로그인</h1>

      <form className="flex flex-col gap-[21px] mt-[80px]">
        <input
          type="text"
          className="w-[562px] h-14 rounded-[10px] border border-[#a6a6a6] pl-[21px]"
          placeholder="아이디를 입력해주세요."
        />
        <input
          type="text"
          className="w-[562px] h-14 rounded-[10px] border border-[#a6a6a6] pl-[21px]"
          placeholder="비밀번호를 입력해주세요."
        />
        <div className="flex items-center gap-[11px]">
          <input
            type="checkbox"
            className="w-[23px] h-[23px] rounded border border-[#a6a6a6]"
          />
          <p className="text-[19px] font-medium text-left text-neutral-600">
            아이디 저장
          </p>
        </div>
        <div className="w-full flex justify-items-center ">
          <button className="w-[562px] h-[72px]  rounded-[10px] bg-[#ff5c00] text-white text-[22px] font-bold">
            로그인
          </button>
        </div>
      </form>
      <div className="flex gap-[48px] mt-[40px]">
        <Link
          href={'/'}
          className="underline text-2xl font-medium text-left text-neutral-600"
        >
          아이디 찾기
        </Link>
        <Link
          href={'/'}
          className="underline text-2xl font-medium text-left text-neutral-600"
        >
          비밀번호 찾기
        </Link>
        <Link
          href={'/'}
          className="underline text-2xl font-medium text-left text-neutral-600"
        >
          회원가입
        </Link>
      </div>
      <div className="flex items-center gap-[12px] mt-[60px]">
        <svg
          width="170"
          height="1"
          viewBox="0 0 170 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <line
            x1="-4.37114e-8"
            y1="0.5"
            x2="170"
            y2="0.499985"
            stroke="#9E9E9E"
          ></line>
        </svg>

        <p className="text-2xl font-medium text-left text-neutral-600">
          또는 다음으로 로그인
        </p>

        <svg
          width="170"
          height="1"
          viewBox="0 0 170 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <line
            x1="-4.37114e-8"
            y1="0.5"
            x2="170"
            y2="0.499985"
            stroke="#9E9E9E"
          ></line>
        </svg>
      </div>
      <div className="flex gap-[52px] mt-[36px]">
        <GoogleLogin />
        <GoogleLogin />
        <GoogleLogin />
      </div>
    </section>
  );
};
export default SignInPage;
