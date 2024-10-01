import PostBox from '@/components/post/postBox/index';

const PostPageArticle = () => {
  return (
    <main>
      <h1 className="text-2xl font-bold text-left text-[#242424]">
        토론 게시판
      </h1>
      <section className="flex flex-col w-full justify-center gap-[16px]">
        {mock.map(item => {
          return <PostBox key={item.id} />;
        })}
      </section>
      <footer className="w-full flex justify-items-center">
        <ul className="flex gap-[14px] w-full">
          <li className="text-lg font-bold text-left text-[#6a6a6a]">1</li>
          <li className="text-lg font-bold text-left text-[#6a6a6a]">2</li>
          <li className="text-lg font-bold text-left text-[#6a6a6a]">3</li>
          <li className="text-lg font-bold text-left text-[#6a6a6a]">4</li>
          <li className="text-lg font-bold text-left text-[#6a6a6a]">5</li>
        </ul>
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
