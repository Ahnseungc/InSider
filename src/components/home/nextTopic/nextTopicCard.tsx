import { FC } from 'react';

export const NextTopicCard: FC = () => {
  return (
    <div className="w-[386px] h-[129px] rounded-xl bg-white border-2 border-[#cecece] flex flex-col flex-1 pt-[24px] pl-[20px]">
      <h1 className="text-base font-semibold text-left text-[#ff5c00]">법률</h1>
      <div className="flex pt-[12px]">
        <p className="max-w-[281px] text-base font-bold text-left text-[#191919] ">
          베이비박스(양육능력이 없는 부모가 영유아를 놓고 가는 박스)를
          확대시행하여야 한다.
        </p>
        <span>아이콘</span>
      </div>
    </div>
  );
};
