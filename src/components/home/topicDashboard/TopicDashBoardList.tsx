import { FC } from 'react';

import { TopicDashBoardCard } from './TopicDashBoardCard';

export const TopicDashBoardList: FC = () => {
  const test = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="grid grid-cols-2 grid-rows-4 gap-[24px]">
      {test.map(item => {
        return <TopicDashBoardCard key={item} />;
      })}
    </div>
  );
};
