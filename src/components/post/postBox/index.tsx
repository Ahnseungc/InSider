import Image from 'next/image';

const PostBox = () => {
  return (
    <div className="min-w-[1200px] min-h-[122px] rounded-[10px] bg-white border border-[#c3c3c3] flex justify-between px-[20px] pt-[20px]">
      <div className="flex flex-col gap-[21px]">
        <div className="flex gap-[10px]">
          <p className="text-xl font-bold text-left text-[#242424]">
            식린이를 위한 분갈이 하는 방법
          </p>
          <p className="text-base font-medium text-left text-[#242424] ml-[2px]">
            엠드르
          </p>
          <p className="text-base font-medium text-left text-[#b8b8b8]">
            2024-09-26
          </p>
        </div>
        <div className="flex">
          <div className="w-[79px] h-[31px] opacity-50 rounded-[15.5px] bg-[#dcdcdc]">
            51
          </div>
          <div className="w-[63px] h-[31px] opacity-50 rounded-[15.5px] bg-[#dcdcdc]">
            61
          </div>
          <ul>
            <li className="flex justify-center items-center h-[29px] px-2 py-1 bg-[#f4f4f4] w-[49px]">
              #문학
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div>이미지 들어감</div>
      </div>
    </div>
  );
};

export default PostBox;
