import { FC } from 'react';

import { RankingCard } from './rankingCard';

export const RankingList: FC = () => {
  const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="grid grid-cols-2 grid-rows-4 gap-[20px]">
      {test.map(item => {
        return <RankingCard key={item} />;
      })}
    </div>
  );
};
