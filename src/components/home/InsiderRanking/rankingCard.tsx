import { FC } from 'react';

export const RankingCard: FC = () => {
  return (
    <div className="w-[576px] h-[68px] bg-white  border-b border-[#DBDBDB] flex flex-1 justify-between items-center">
      <div className="flex">
        <p className="text-lg font-bold text-left text-[#ff5c00]">1</p>
        <div className="pl-[40px]">
          <h2 className="text-sm font-medium text-left text-[#a2a2a2]">취업</h2>
          <h1 className="text-base font-medium text-left text-black mt-[10px]">
            본사의 갑작스런 해고통보
          </h1>
        </div>
      </div>

      <div className="flex gap-[28px]">
        <span>
          <p className="text-base font-medium text-left text-black">90</p>
        </span>
        <span>
          <p className="text-base font-medium text-left text-black">90</p>
        </span>
      </div>
    </div>
  );
};
