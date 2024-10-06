'use client';

import Pagination from '@/components/common/pagination';
import { Input } from '@/components/common/input';
import {
  Like,
  UnLike,
  Comment,
  ProfileIcon,
  ClockIcon,
  SaveIcon,
  PlusIcon,
} from '@/components/common/Icon';

import CommentBox from '@/components/post/commentBox';
import CommentRepleBox from '@/components/post/commentRepleBox';
import DetailPostBox from '@/components/post/DetailPostBox';

const PostDetailPage = () => {
  return (
    <div className="w-full h-full pl-[33px]">
      <section className="pt-[85px] w-full h-full">
        <header className="w-full pb-[47px] border-b-[1px] border-[#E1E1E1]">
          <h1 className="text-2xl font-bold text-left text-[#242424]">
            5월이 오면
          </h1>
          <div className=" w-full flex justify-between mt-[9px] items-center">
            <div className="flex items-center gap-[18px]">
              <div className="flex items-center gap-[8px]">
                <span>
                  <ProfileIcon />
                </span>
                <p className="text-lg font-medium text-left text-[#242424]">
                  인싸이더
                </p>
              </div>
              <div className="flex items-center gap-[4px]">
                <span className="flex">
                  <ClockIcon />
                  <p className="text-sm font-medium text-left text-[#b8b8b8]">
                    9시간
                  </p>
                </span>
              </div>
            </div>
            <div>
              <SaveIcon />
            </div>
          </div>
        </header>
        <section className="pt-[41px]">
          <div className="flex gap-[31px]">
            <div className="w-[50%] h-[460px] bg-slate-200 rounded-xl" />
            <div className="w-[50%] h-[460px] bg-slate-200 rounded-xl" />
          </div>
          <p className="mt-[28px]">
            해마다 봄이 오면 친정 집 뒤뜰에 붓끝 모양의 푸른 잎이 무더기 무더기
            돋는다. 아버지는 생전에 이 꽃을 유난히 사랑하고 상사화(想思花)란
            세칭을 피하여 당신만은 모사화(母思花)라 이르셨다. 해토(解土)가 되기
            무섭게 지표를 뚫고 용감한 기세로 돋아나는 모사화 잎은 오직 잎만
            피우기 위한 듯 무성하게 자란다. 그리고 어느 날 무더위가 시작 될 즈음
            초록빛 융성한 잎은 모두 죽어 거름이 되고 거기 죽음 같은 꽃 잎을 물고
            연보라 빛이 피어난다. 잎은 꽃을 보지 못하고 꽃 또한 잎을 보지 못해
            모사화라 이름 지으신 친정 아버지의 속 깊은 불망(不望)의 회한을
            이제사 짐작하는 내게 역시 꽃은 아픔으로 피어나고 있다. 어쩌면 꽃잎은
            못다한 불효의 한을 저렇듯 슬프게 피워내고 있는 것이리라. 지난 3월,
            우리는 시부모님들의 칠순을 겸한 결혼 58주년 기념회를 조촐하게 마련
            했다. 한사코 마다시는 것을 부족하나마 보은(報恩)의 뜻으로 받으시라는
            간청에 못 이겨 마지못해 허락을 주셨다. 낳아주시고 길러 주시고 이렇게
            가르쳐 주신 은공을 단 하루의 바침으로 어찌 보은이 될까마는 작은
            정성이나마 살아 생전에 기쁨을 드리고 싶어서 였다. 홍안의 새신랑 새
            각시가 되어 두 분 얼싸안고 더덩실 흥겨워 하시는 모습을 바라 뵈오며
            나는 자꾸 서리오기 전날의 풀잎을 생각하고 눈시울을 적셨다. 나날이
            굽어가는 허리며 깊어지는 주름을 대하면 왜 이렇게 안타깝고
            초조해지는지 무심한 세월이 야속스럽다. 친정 부모님이 생전에 계셨을
            때는 철없이 시부모님께 향한 마음은 법도에 얽매인 의무에 불과 했다.
            애틋한 마음의 정은 마음껏 뫼시지 못하는 친정 부모 곁에 서성였다.
            그러다가 두분 모두 떠나시고 내 아이들이 웅기중기 커가니 그제서야
            그분들을 닮은 소중한 남편과 아이들을 내게 주신 시부모님이 진한
            핏줄의 연대감으로 부각 돼 오기 시작했다.
          </p>
          <ul className="flex gap-[6px] mt-[48px]">
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
          <div className="flex mt-[60px]">
            <div className="flex gap-[4px] items-center justify-center w-[79px] h-[31px] rounded-[15.5px] bg-[rgba(220,220,220,0.5)] z-0">
              <Like />
              51
              <UnLike />
            </div>
            <div className="flex gap-[8px] items-center justify-center  w-[63px] h-[31px]  rounded-[15.5px] bg-[rgba(220,220,220,0.5)] z-0 ml-[12px]">
              <Comment />
              61
            </div>
          </div>
        </section>
        <section className="mt-[24px] w-full">
          <Input
            id="search"
            type="text"
            onChange={() => null}
            value={''}
            placeHolder="댓글을 달아주세요"
            style={
              'w-full h-10 rounded-[20.5px] bg-[#f4f4f4] border-[1.5px] border-[#b0b0b0] placeholder:text-neutral-600 pl-[20px]'
            }
          />
          <CommentBox
            comment={
              '나는 요즘 어머님이라는 칭호를 엄마로 바꾸었다.이제까지의 어렵고 조심스러운 며느리의 자리에서 당신의 딸로 머물고 싶어서다. 두분 아니 계시면 이 세상 어디서 어머니, 아버지 부드럽고 다감한 부름을 불러 볼 수 있겠는가. 평생을 통하여 자식들에게 베풀기만 하셨으니 이제 남은 여생, 몸과 마음이 편하시도록 받들어 모실 일만 남았다.'
            }
          />
          <CommentRepleBox
            comment={
              '나는 요즘 어머님이라는 칭호를 엄마로 바꾸었다.이제까지의 어렵고 조심스러운 며느리의 자리에서 당신의 딸로 머물고 싶어서다. 두분 아니 계시면 이 세상 어디서 어머니, 아버지 부드럽고 다감한 부름을 불러 볼 수 있겠는가. 평생을 통하여 자식들에게 베풀기만 하셨으니 이제 남은 여생, 몸과 마음이 편하시도록 받들어 모실 일만 남았다.'
            }
          />
          <CommentRepleBox
            comment={
              '나는 요즘 어머님이라는 칭호를 엄마로 바꾸었다.이제까지의 어렵고 조심스러운 며느리의 자리에서 당신의 딸로 머물고 싶어서다. 두분 아니 계시면 이 세상 어디서 어머니, 아버지 부드럽고 다감한 부름을 불러 볼 수 있겠는가. 평생을 통하여 자식들에게 베풀기만 하셨으니 이제 남은 여생, 몸과 마음이 편하시도록 받들어 모실 일만 남았다.'
            }
          />
          <CommentBox
            comment={
              '나는 요즘 어머님이라는 칭호를 엄마로 바꾸었다.이제까지의 어렵고 조심스러운 며느리의 자리에서 당신의 딸로 머물고 싶어서다. 두분 아니 계시면 이 세상 어디서 어머니, 아버지 부드럽고 다감한 부름을 불러 볼 수 있겠는가. 평생을 통하여 자식들에게 베풀기만 하셨으니 이제 남은 여생, 몸과 마음이 편하시도록 받들어 모실 일만 남았다.'
            }
          />
          <CommentBox
            comment={
              '나는 요즘 어머님이라는 칭호를 엄마로 바꾸었다.이제까지의 어렵고 조심스러운 며느리의 자리에서 당신의 딸로 머물고 싶어서다. 두분 아니 계시면 이 세상 어디서 어머니, 아버지 부드럽고 다감한 부름을 불러 볼 수 있겠는가. 평생을 통하여 자식들에게 베풀기만 하셨으니 이제 남은 여생, 몸과 마음이 편하시도록 받들어 모실 일만 남았다.'
            }
          />
          <div className="flex gap-[8px] justify-center py-[11px] w-full bg-[#ffddca]">
            <button className="flex">
              <PlusIcon />
              <p className="text-lg font-bold text-left text-[#ff5c00]">
                대댓글 44개 더보기
              </p>
            </button>
          </div>
        </section>
        <section className="w-full">
          <h3 className="text-2xl font-bold text-left text-[#242424] pt-[60px] pb-[28px]">
            인싸이더 게시물
          </h3>

          <div className="border-t-[1px] border-[#C8C8C8]">
            <DetailPostBox id={0} slug={'sd'} />
            <DetailPostBox id={0} slug={'sd'} />
            <DetailPostBox id={0} slug={'sd'} />
            <DetailPostBox id={0} slug={'sd'} />
            <DetailPostBox id={0} slug={'sd'} />
            <DetailPostBox id={0} slug={'sd'} />
          </div>
        </section>
        <footer className="mt-[60px]">
          <Pagination />
        </footer>
      </section>
    </div>
  );
};

export default PostDetailPage;
