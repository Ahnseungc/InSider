import Link from 'next/link';
import { FC } from 'react';

export const TopicCard: FC = () => {
  return (
    <div className="w-[383px] h-[311px] rounded-xl bg-white border-2 border-[#cecece] flex flex-col flex-1 justify-evenly pl-[31px] pt-[40px] pb-[27px]">
      <h3 className="text-xl font-bold text-left text-main">교육</h3>
      <h4 className="w-[184px] text-[20px] font-bold text-left text-[#202020]">
        교복제를 폐지해야할까?
      </h4>
      <p className="w-[295px] text-base text-left">
        <span className="w-[184px] text-base text-left text-[#191919] break-all mt-[16px]">
          ‘현재 시행되고 있는 고등학교 및 중학교 교복제를 지속적으로
          시행해야한다’에 대한 찬반..
        </span>
      </p>
      <Link href={'/post/discussion'}>
        <button className="w-[193px] h-[49px] rounded-lg bg-main flex items-center justify-center mt-[28px]">
          <p className="text-base font-bold text-left text-white">
            토론 페이지로 이동하기
          </p>
        </button>
      </Link>
    </div>
  );
};
