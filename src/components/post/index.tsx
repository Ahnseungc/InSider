import { FC } from 'react';
import Pagination from '../common/pagination';
import PostBox from '@/components/post/postBox/index';

interface PostPageArticleProps {
  slug: string;
}

const PostPageArticle: FC<PostPageArticleProps> = ({ slug }) => {
  return (
    <main className="w-full h-full pt-[33px] px-[89px]">
      <h1 className="text-2xl font-bold text-left text-[#242424]">
        토론 게시판
      </h1>
      <section className="flex flex-col w-full justify-center gap-[16px] pt-[19px]">
        {mock.map(item => {
          return <PostBox key={item.id} id={item.no} slug={slug} />;
        })}
      </section>
      <footer className="mt-[60px]">
        <Pagination />
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
  { id: 7, no: 7 },
  { id: 8, no: 8 },
  { id: 9, no: 9 },
  { id: 10, no: 10 },
];

export default PostPageArticle;
