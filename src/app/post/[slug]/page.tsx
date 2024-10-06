import PostPageArticle from '@/components/post';
interface PostPageProps {
  params: { slug: string };
}

const PostPage = ({ params }: PostPageProps) => {
  const slug = params.slug;
  return <PostPageArticle slug={slug} />;
};

export default PostPage;
