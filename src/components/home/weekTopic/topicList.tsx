'use client';

import { FC, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { TopicCard } from './topicCard';
import { LeftArrow, RightArrow } from '@/components/common/Icon';

export const TopicList: FC = () => {
  const test = [1, 2, 3];
  const [currentCard, setCurrentCard] = useState<number>(0);
  return (
    <div className="flex gap-6">
      {test.map(item => {
        return <TopicCard key={item} />;
      })}
    </div>
  );
};
