import { FC } from 'react';
import {
  Like,
  UnLike,
  Comment,
  ProfileIcon,
  RepleIcon,
} from '@/components/common/Icon';

interface CommentRepleBoxProps {
  comment: string;
}

const CommentRepleBox: FC<CommentRepleBoxProps> = ({ comment }) => (
  <div className="min-w-[1200px] min-h-[122px] flex items-start px-[20px] pt-[15px] bg-[#fff4ee] gap-[8px]">
    <RepleIcon />
    <div className="flex flex-col gap-[9px]">
      <div className="flex gap-[10px] items-center">
        <div className="flex gap-[4px]">
          <span>
            <ProfileIcon />
          </span>
          <p className="text-base font-medium text-left text-[#242424] ml-[2px]">
            엠드르
          </p>
        </div>
        <p className="text-base font-medium text-left text-[#b8b8b8]">
          10일 전
        </p>
      </div>
      <p className="text-base font-medium text-left text-[#242424] max-w-[1045px]">
        {comment}
      </p>
      <div className="flex">
        <div className="flex gap-[4px] items-center justify-center w-[79px] h-[31px] rounded-[15.5px] z-0">
          <Like />
          51
          <UnLike />
        </div>
        <div className="flex gap-[8px] items-center justify-center  w-[63px] h-[31px]  rounded-[15.5px] z-0 ml-[12px]">
          <Comment />
          8.5k
        </div>
      </div>
    </div>
  </div>
);

export default CommentRepleBox;
