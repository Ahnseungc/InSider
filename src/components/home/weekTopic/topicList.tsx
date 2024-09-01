import { FC } from 'react';
import { TopicCard } from './topicCard';

export const TopicList: FC = () => {
  const test = [1, 2, 3];

  return (
    <div className="flex">
      {test.map(item => {
        return <TopicCard key={item} />;
      })}
    </div>
  );
};
