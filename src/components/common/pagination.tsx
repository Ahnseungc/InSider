import { SmallLeftArrow, SmallRightArrow } from '../common/Icon';

const Pagination = () => {
  return (
    <div className="w-full flex justify-center items-center gap-[16px]">
      <SmallLeftArrow active={false} />
      <ul className="flex gap-[14px] items-center">
        <li className="flex justify-center items-center w-[28px] h-[28px] rounded-[4.6px] text-lg font-bold text-left text-[#6a6a6a] hover:bg-main hover:text-white cursor-pointer">
          1
        </li>
        <li className="flex justify-center items-center w-[28px] h-[28px] rounded-[4.6px] text-lg font-bold text-left text-[#6a6a6a] hover:bg-main hover:text-white cursor-pointer">
          2
        </li>
        <li className="flex justify-center items-center w-[28px] h-[28px] rounded-[4.6px] text-lg font-bold text-left text-[#6a6a6a] hover:bg-main hover:text-white cursor-pointer">
          3
        </li>
        <li className="flex justify-center items-center w-[28px] h-[28px] rounded-[4.6px] text-lg font-bold text-left text-[#6a6a6a] hover:bg-main hover:text-white cursor-pointer">
          4
        </li>
        <li className="flex justify-center items-center w-[28px] h-[28px] rounded-[4.6px] text-lg font-bold text-left text-[#6a6a6a] hover:bg-main hover:text-white cursor-pointer">
          5
        </li>
        <li className="flex justify-center items-center w-[28px] h-[28px] rounded-[4.6px] text-lg font-bold text-left text-[#6a6a6a] hover:bg-main hover:text-white cursor-pointer">
          6
        </li>
        <li className="flex justify-center items-center w-[28px] h-[28px] rounded-[4.6px] text-lg font-bold text-left text-[#6a6a6a] hover:bg-main hover:text-white cursor-pointer">
          7
        </li>
        <li className="flex justify-center items-center w-[28px] h-[28px] rounded-[4.6px] text-lg font-bold text-left text-[#6a6a6a] hover:bg-main hover:text-white cursor-pointer">
          8
        </li>
        <li className="flex justify-center items-center w-[28px] h-[28px] rounded-[4.6px] text-lg font-bold text-left text-[#6a6a6a] hover:bg-main hover:text-white cursor-pointer">
          9
        </li>

        <li className="flex justify-center items-center w-[28px] h-[28px] rounded-[4.6px] text-lg font-bold text-left text-[#6a6a6a] hover:bg-main hover:text-white cursor-pointer">
          10
        </li>
      </ul>
      <SmallRightArrow active={false} />
    </div>
  );
};

export default Pagination;
