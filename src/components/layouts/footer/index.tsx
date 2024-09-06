'use client';

import { FC } from 'react';
import { FooterList } from './FooterList';

export const Footer: FC = () => {
  return (
    <footer className="w-full flex flex-col items-center justify-center gap-9 pt-24 pb-20">
      <FooterList />
      <p>Copyright © 2024 iNSIDER. All rights reserved.</p>
    </footer>
  );
};
