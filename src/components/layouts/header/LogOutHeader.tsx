import { FC } from 'react';
import { Line } from '@/components/common/Icon';
import Link from 'next/link';

const LogOutHeader: FC = () => {
  return (
    <div className="flex gap-[20px] items-center">
      <p className="text-lg font-semibold text-left text-[#4b4b4b]">로그인</p>
      <Line />
      <Link href={'/signup'}>
        <p className="text-lg font-semibold text-left text-[#4b4b4b] cursor-pointer">
          회원 가입
        </p>
      </Link>
      <Line />
      <p className="text-lg font-semibold text-left text-[#4b4b4b]">
        메인 페이지
      </p>
    </div>
  );
};

export default LogOutHeader;
