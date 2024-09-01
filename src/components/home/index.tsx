import { FC } from 'react';
import { TopicList } from './weekTopic/topicList';

export const MainArticle: FC = () => {
  return (
    <div className="w-full flex flex-col items-center pt-20 pl-[19px]">
      <div className="max-w-mainsection">
        <section>
          <header>
            <h1 className="text-4xl font-bold text-left text-[#202020]">
              이번주 토론 주제
            </h1>
            <p className="text-lg font-medium text-left text-[#191919] mt-[21px]">
              이번주 토론 주제에 투표 참여해주세요! 금주 투표 결과에 따라 다음주
              주제 선정에 반영됩니다.
            </p>
          </header>
          <article className="mt-[50px]">
            <TopicList />
          </article>
          <footer className="mt-[76px]">10개정도 순위 랭킹 검색어</footer>
          <header>
            <h1 className="text-4xl font-bold text-left text-[#202020] mt-[21px]">
              다음주 토론 주제 투표
            </h1>
            <p className="text-lg font-medium text-left text-[#191919]">
              토론 주제에 투표 참여해주세요! 금주 투표 결과에 따라 다음주 주제
              선정에 반영됩니다.(최대 세 번 투표 가능합니다.)
            </p>
          </header>
          <article className="mt-[50px]">
            <TopicList />
          </article>
          <footer></footer>
        </section>
      </div>
    </div>
  );
};
