import { FC } from 'react';

import { TopicDashBoardCard } from './TopicDashBoardCard';

export const TopicDashBoardList: FC = () => {
  const insiderItem = [
    { no: 1, name: '취업', icon: 'Employment' },
    { no: 2, name: '연애', icon: 'Relationship' },
    { no: 3, name: '경제', icon: 'Economy' },
    { no: 4, name: '정치', icon: 'Politics' },
    { no: 5, name: '스포츠', icon: 'Sports' },
    { no: 6, name: '사회', icon: 'Society' },
  ];

  return (
    <div className="grid grid-cols-2 grid-rows-4 gap-[24px]">
      {insiderItem.map(item => {
        return <TopicDashBoardCard key={item.no} item={item} />;
      })}
    </div>
  );
};
