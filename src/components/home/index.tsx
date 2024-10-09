import { FC } from 'react';
import { TopicList } from './weekTopic/topicList';
import { RankingList } from './InsiderRanking/rankingList';
import { NextTopicList } from './nextTopic/nextTopicList';
import { TopicDashBoardList } from './topicDashboard/TopicDashBoardList';
import { HealingList } from './healing/healingList';
import { LeftArrow, RightArrow } from '@/components/common/Icon';

export const MainArticle: FC = () => {
  return (
    <div className="w-full flex flex-col items-center pt-[40px] pl-[22px]">
      <div className="">
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
            <footer className="w-full flex justify-center mt-[20px]">
              <button className="w-[305px] h-[71px] rounded-[10px] bg-[#ff5c00]">
                <span className="text-lg font-bold text-left text-white">
                  선택하고 투표현황 보기
                </span>
              </button>
            </footer>
          </div>
          <div className="pl-[76px] mt-[49px]">
            <header className="">
              <h1 className="text-[24px] font-bold text-left text-[#202020] ">
                토론 게시판
              </h1>
            </header>
            <article className="mt-[28px]">
              <TopicDashBoardList />
            </article>
          </div>
          <div className="pl-[76px] mt-[49px]">
            <header className="">
              <h1 className="text-[24px] font-bold text-left text-[#202020] ">
                힐링 추천
              </h1>
            </header>
            <article className="mt-[28px]">
              <HealingList />
            </article>
          </div>
        </section>
      </div>
    </div>
  );
};
