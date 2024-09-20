import { FC } from 'react';

const List = [1, 2, 3, 4, 5];

export const TopicDashBoardCard: FC = () => {
  return (
    <div className="w-[588px] h-[355px] rounded-xl bg-white border-2 border-[#cecece] flex flex-col flex-1 ">
      <div className="flex w-full justify-between pl-[24px] pt-[26px] pr-[24px]">
        <h3 className="text-xl font-bold text-left text-main">취업</h3>
        <div className="flex gap-[4px]">
          <p className="text-base font-bold text-left text-[#8f8f8f]">더보기</p>
          <span>아이콘</span>
        </div>
      </div>
      <div className="mt-[12px]">
        {List.map(item => {
          return (
            <div
              key={item}
              className="flex border-b border-[#EEEEEE] py-[16px] justify-between px-[24px]"
            >
              <p className="text-base text-left text-[#242424]">
                형님들 퇴사사유 두개 중 조언 부탁드립니다.
              </p>
              <div className="flex gap-[20px]">
                <div>
                  <p className="text-base text-left text-[#242424]">91</p>
                </div>
                <div>
                  <p className="text-base text-left text-[#242424]">84</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
