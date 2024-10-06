import Link from 'next/link';
import { SignupSuccessIcon } from '@/components/common/Icon';

export default function Success() {
  return (
    <main className="w-full h-full pt-[226px]">
      <section className="w-full flex flex-col justify-center items-center gap-[20px]">
        <SignupSuccessIcon />
        <h1 className="text-[32px] font-bold text-black">회원가입 완료!</h1>
        <h3 className="text-lg font-medium text-[#616161]">
          회원가입을 통해 더 많은 토론에 참여해보세요
        </h3>
      </section>
      <section className="flex flex-col gap-[12px] w-full items-center mt-[48px]">
        <button className="flex justify-center items-center w-[305px] h-[71px] relative gap-2.5 px-10 py-[22px] rounded-[10px] bg-[#ff5c00]">
          <p className="flex-grow-0 flex-shrink-0 w-[211px] text-xl font-bold text-left text-white">
            <Link href={'/signup/tendency'}>나의 성향 테스트 하러가기</Link>
          </p>
        </button>
        <button className="flex justify-center items-center w-[305px] h-[71px] relative gap-2.5 px-10 py-[22px] rounded-[10px] bg-[#d9d9d9]">
          <p className="flex-grow-0 flex-shrink-0 w-[219px] text-xl font-bold text-left text-white">
            <Link href={'/'}>메인페이지로 바로 구경가기</Link>
          </p>
        </button>
      </section>
    </main>
  );
}
