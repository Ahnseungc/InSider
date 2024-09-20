import { FC } from 'react';

import { TopicDashBoardCard } from '../topicDashboard/TopicDashBoardCard';

export const HealingList: FC = () => {
  const test = [1, 2];

  return (
    <div className="grid grid-cols-2 grid-rows-1 gap-[24px]">
      {test.map(item => {
        return <TopicDashBoardCard key={item} />;
      })}
    </div>
  );
};
