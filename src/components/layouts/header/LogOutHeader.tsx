import { FC } from 'react';
import Link from 'next/link';
import { Line } from '@/components/common/Icon';

const LogOutHeader: FC = () => {
  return (
    <div className="flex gap-[20px] items-center">
      <Link href={'/login'}>
        <p className="text-lg font-semibold text-left text-[#4b4b4b]">로그인</p>
      </Link>
      <Line />
      <Link href={'/signup'}>
        <p className="text-lg font-semibold text-left text-[#4b4b4b] cursor-pointer">
          회원 가입
        </p>
      </Link>
      <Line />
      <Link href={'/'}>
        <p className="text-lg font-semibold text-left text-[#4b4b4b] cursor-pointer">
          메인 페이지
        </p>
      </Link>
    </div>
  );
};

export default LogOutHeader;
