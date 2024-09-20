import { FC } from 'react';

import { NextTopicCard } from './nextTopicCard';

export const NextTopicList: FC = () => {
  const test = [1, 2, 3, 4, 5, 6];

  return (
    <div className="grid grid-cols-3 grid-rows-4 gap-[20px]">
      {test.map(item => {
        return <NextTopicCard key={item} />;
      })}
    </div>
  );
};
