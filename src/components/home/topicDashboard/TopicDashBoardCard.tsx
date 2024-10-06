import { SmallRightArrow } from '@/components/common/Icon';
import { FC } from 'react';
import {
  Employment,
  Relationship,
  Economy,
  Politics,
  Sports,
  Society,
  Anonymity,
  Consolation,
  Pet,
  Cheering,
  Freedom,
  Up,
  Down,
  NoChange,
} from '@/components/common/Icon';
import { RenderIcon } from '@/utils/renderIcon';
import { IconComponents } from '@/models';
const iconComponents: IconComponents = {
  Employment,
  Relationship,
  Economy,
  Politics,
  Sports,
  Society,
  Anonymity,
  Consolation,
  Pet,
  Cheering,
  Freedom,
  Up,
  Down,
  NoChange,
};

const List = [1, 2, 3, 4, 5];
interface TopicDashBoardCardProps {
  item: {
    no: number;
    name: string;
    icon: string;
  };
}

export const TopicDashBoardCard: FC<TopicDashBoardCardProps> = ({ item }) => {
  return (
    <div className="w-[588px] h-[355px] rounded-xl bg-white border-2 border-[#cecece] flex flex-col flex-1 ">
      <div className="flex w-full justify-between pl-[24px] pt-[26px] pr-[24px]">
        <div className="flex items-center">
          {RenderIcon(item?.icon, iconComponents)}
          <h3 className="text-xl font-bold text-left text-main">
            {item?.name}
          </h3>
        </div>
        <div className="flex gap-[4px] items-center">
          <p className="text-base font-bold text-left text-[#8f8f8f]">더보기</p>
          <SmallRightArrow active={false} />
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
