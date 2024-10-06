import Link from 'next/link';
import { FC } from 'react';

interface DetailPostBoxProps {
  id: number;
  slug: string;
}

const DetailPostBox: FC<DetailPostBoxProps> = ({ id, slug }) => (
  <Link href={`/post/${slug}/${id}`}>
    <div className="w-full flex justify-between pl-[119px] pr-[31px] py-[16px] border-b-[1px] border-[#C8C8C8]">
      <span className="flex gap-[8px]">
        <p className="text-lg font-medium text-left text-[#242424]">
          윤대통령, 기시다 후미오 일본 총리 12번째 회담
        </p>
        <p className="text-lg font-medium text-left text-[#969696]">[132]</p>
      </span>
      <p className="text-sm font-medium text-left text-[#242424]">2024-09-23</p>
    </div>
  </Link>
);

export default DetailPostBox;
