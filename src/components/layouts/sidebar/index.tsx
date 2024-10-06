import { WidthLine } from '@/components/common/Icon';
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

//224
//394
//235

export const SideBar = () => {
  return (
    <aside className="fixed pl-[28px] flex gap-[26px] h-screen">
      <div className="flex flex-col items-center h-screen">
        <div className="w-full pt-[47px]">
          <p className="text-[15px] text-left text-[#7e7e7e] mb-[24px]">
            <span className="text-[15px] font-bold text-left text-main">
              HOT
            </span>
            <span className="text-[15px] text-left text-[#7e7e7e]">토픽</span>
          </p>
          <div className="flex flex-col gap-[16px] pb-[28px] ">
            {topicItem.map(item => {
              return (
                <div
                  key={item.no}
                  className="flex relative items-center max-h-[18px]"
                >
                  <div>
                    <span className="text-[15px] font-bold text-left text-black mr-[12px]">
                      {item.no}
                    </span>
                    <span className="text-[15px] text-left text-[#383838]">
                      {item.name}
                    </span>
                  </div>
                  <span className="absolute right-[32px]">
                    {RenderIcon(item.status, iconComponents)}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full">
          <WidthLine />
        </div>

        <div className="w-full mt-[29px] mb-[22px]">
          <p className="text-[15px] text-left text-[#7e7e7e] mb-[19px]">
            인싸이드 게시판
          </p>
          <div className="flex flex-col gap-[24px]">
            {insiderItem.map(item => {
              return (
                <div
                  key={item.no}
                  className="flex gap-[15px] items-center max-h-[18px]"
                >
                  <span>{RenderIcon(item?.icon, iconComponents)}</span>
                  <span>{item.name}</span>
                </div>
              );
            })}
          </div>
          <p className="text-xs font-bold text-left text-main mt-[24px]">
            더보기
          </p>
        </div>
        <div className="w-full">
          <WidthLine />
        </div>

        <div className="w-full pb-[27px] mt-[30px]">
          <p className="text-[15px] text-left text-[#7e7e7e]">힐링추천</p>
          <div className="flex flex-col gap-[24px] mt-[18px]">
            {HealingItem.map(item => {
              return (
                <div
                  key={item.no}
                  className="flex gap-[15px] items-center max-h-[18px]"
                >
                  <span>{RenderIcon(item?.icon, iconComponents)}</span>
                  <span>{item.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-[1px] bg-[#A6A6A6]"></div>
    </aside>
  );
};

const topicItem = [
  { no: 1, name: '김예지', status: 'NoChange' },
  { no: 2, name: '올림픽', status: 'Up' },
  { no: 3, name: '양궁', status: 'Down' },
  { no: 4, name: '대한항공', status: 'Up' },
  { no: 5, name: '역도', status: 'NoChange' },
];

const insiderItem = [
  { no: 1, name: '취업', icon: 'Employment' },
  { no: 2, name: '연애', icon: 'Relationship' },
  { no: 3, name: '경제', icon: 'Economy' },
  { no: 4, name: '정치', icon: 'Politics' },
  { no: 5, name: '스포츠', icon: 'Sports' },
  { no: 6, name: '사회', icon: 'Society' },
  { no: 7, name: '익명 자유', icon: 'Society' },
];

const HealingItem = [
  { no: 1, name: '익명고민', icon: 'Anonymity' },
  { no: 2, name: '반려동물', icon: 'Pet' },
  { no: 3, name: '무한위로', icon: 'Consolation' },
  { no: 4, name: '응원합시다', icon: 'Cheering' },
  // { no: 5, name: '익명 자유', icon: 'Freedom' },
];
