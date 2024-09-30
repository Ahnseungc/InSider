import Image from 'next/image';

const PostBox = () => {
  return (
    <div className="min-w-[1200px] min-h-[122px] rounded-[10px] bg-white border border-[#c3c3c3] flex">
      <div>
        <p>식린이를 위한 분갈이 하는 방법</p>
        <p>엠드르</p>
        <p>2024-09-26</p>
      </div>
      <div>
        <Image src={''} alt={''} />
      </div>
    </div>
  );
};

export default PostBox;
