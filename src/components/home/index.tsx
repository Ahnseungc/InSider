import { FC } from 'react';
import { TopicList } from './weekTopic/topicList';
import { RankingList } from './InsiderRanking/rankingList';
import { NextTopicList } from './nextTopic/nextTopicList';
import { LeftArrow, RightArrow } from '@/components/common/Icon';

export const MainArticle: FC = () => {
  return (
    <div className="w-full flex flex-col items-center pt-[40px] pl-[19px]">
      <div className="max-w-mainsection">
        <section>
          <div>
            <header className="pl-[76px]">
              <h1 className="text-[24px] font-bold text-left text-[#202020] ">
                이번주 토론 주제
              </h1>
              <p className="text-[18px] font-medium text-left text-[#191919] mt-[21px]">
                이번주 토론 주제에 투표 참여해주세요! 금주 투표 결과에 따라
                다음주 주제 선정에 반영됩니다.
              </p>
            </header>
          </div>
          <article className="mt-[50px] flex items-center">
            <LeftArrow active={false} />
            <TopicList />
            <RightArrow active={false} />
          </article>

          <div className="pl-[76px] mt-[48px]">
            <header className="">
              <h1 className="text-[24px] font-bold text-left text-[#202020] ">
                인싸이더 랭킹
              </h1>
            </header>
            <article className="mt-[50px]">{<RankingList />}</article>
            <footer></footer>
          </div>
          <div className="pl-[76px] mt-[49px]">
            <header className="">
              <h1 className="text-[24px] font-bold text-left text-[#202020] ">
                다음주 토론 주제 투표
              </h1>
              <p className="text-[18px] font-medium text-left text-[#191919] mt-[21px]">
                토론 주제에 투표 참여해주세요! 금주 투표 결과에 따라 다음주 주제
                선정에 반영됩니다.(최대 세 번 투표 가능합니다.)
              </p>
            </header>
            <article className="mt-[50px]">
              <NextTopicList />
            </article>
            <footer></footer>
          </div>
        </section>
      </div>
    </div>
  );
};
