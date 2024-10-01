import PostBox from '@/components/post/postBox/index';
import { SmallLeftArrow, SmallRightArrow } from '../common/Icon';

const PostPageArticle = () => {
  return (
    <main className="pt-[33px] pl-[89px]">
      <h1 className="text-2xl font-bold text-left text-[#242424]">
        토론 게시판
      </h1>
      <section className="flex flex-col w-full justify-center gap-[16px] pt-[19px]">
        {mock.map(item => {
          return <PostBox key={item.id} />;
        })}
      </section>
      <footer className="w-full flex justify-center mt-[60px] items-center gap-[16px]">
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
      </footer>
    </main>
  );
};

const mock = [
  { id: 1, no: 1 },
  { id: 2, no: 2 },
  { id: 3, no: 3 },
  { id: 4, no: 4 },
  { id: 5, no: 5 },
  { id: 6, no: 6 },
];

export default PostPageArticle;
