import PostPageArticle from '@/components/post';

type Props = {
  params: {
    slug: string;
  };
};

const PostPage = ({ params }: Props) => {
  return <PostPageArticle />;
};

export default PostPage;
