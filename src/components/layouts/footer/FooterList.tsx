import React from 'react';
import Link from 'next/link';
import { Line } from '@/components/common/Icon';

export const FooterList = () => {
  const FooterListItem = [
    { id: 0, name: '회사소개' },
    { id: 1, name: '제휴안내' },
    { id: 2, name: '광고안내' },
    { id: 3, name: '이용약관' },
    { id: 4, name: '개인정보처리방침' },
  ];

  return (
    <div className="flex gap-[16px] items-center">
      {FooterListItem.map((item, index) => {
        return (
          <React.Fragment key={item.id}>
            <Link href={'/'}>{item.name}</Link>
            {index !== FooterListItem.length - 1 && <Line />}
          </React.Fragment>
        );
      })}
    </div>
  );
};
