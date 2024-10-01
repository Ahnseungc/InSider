import { Like, UnLike, Comment, ProfileIcon } from '@/components/common/Icon';
import Image from 'next/image';

const PostBox = () => (
  <div className="min-w-[1200px] min-h-[122px] rounded-[10px] bg-white border border-[#c3c3c3] flex justify-between px-[20px] pt-[20px]">
    <div className="flex flex-col gap-[21px]">
      <div className="flex gap-[10px] items-center">
        <p className="text-xl font-bold text-left text-[#242424]">
          식린이를 위한 분갈이 하는 방법
        </p>
        <div className="flex gap-[4px]">
          <span>
            <ProfileIcon />
          </span>
          <p className="text-base font-medium text-left text-[#242424] ml-[2px]">
            엠드르
          </p>
        </div>
        <p className="text-base font-medium text-left text-[#b8b8b8]">
          2024-09-26
        </p>
      </div>
      <div className="flex">
        <div className="flex gap-[4px] items-center justify-center w-[79px] h-[31px] rounded-[15.5px] bg-[rgba(220,220,220,0.5)] z-0">
          <Like />
          51
          <UnLike />
        </div>
        <div className="flex gap-[8px] items-center justify-center  w-[63px] h-[31px]  rounded-[15.5px] bg-[rgba(220,220,220,0.5)] z-0 ml-[12px]">
          <Comment />
          61
        </div>
        <ul className="ml-[16px] flex gap-[6px]">
          <li className="flex justify-center items-center h-[29px] px-2 py-1 bg-[#f4f4f4] w-[49px] text-sm font-medium text-left text-[#242424]">
            #문학
          </li>
          <li className="flex justify-center items-center h-[29px] px-2 py-1 bg-[#f4f4f4] w-[49px] text-sm font-medium text-left text-[#242424]">
            #문학
          </li>
          <li className="flex justify-center items-center h-[29px] px-2 py-1 bg-[#f4f4f4] w-[49px] text-sm font-medium text-left text-[#242424]">
            #문학
          </li>
        </ul>
      </div>
    </div>
    <div>
      <div className="w-[102px] h-[82.06px] rounded-[4.6px] bg-slate-500">
        이미지 들어감
      </div>
    </div>
  </div>
);

export default PostBox;
