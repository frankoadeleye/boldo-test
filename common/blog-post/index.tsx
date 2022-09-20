import Image from "next/image";
import { BlogImageWrap, BlogPostBlock, BlogContentWrap } from "./styled";

type BlogPostProps = {
  data: {
    id: number;
    imageSrc: string;
    title: string;
    date: string;
    authorAvatar: string;
    author: string;
  };
};

function BlogPost({ data }: BlogPostProps) {
  const { id, imageSrc, title, date, authorAvatar, author } = data;
  return (
    <BlogPostBlock>
      <BlogImageWrap>
        <Image
          width="550px"
          height="386px"
          layout="intrinsic"
          style={{ borderRadius: "inherit" }}
          src={imageSrc}
          alt={`blog-image ${id}`}
        />
      </BlogImageWrap>
      <BlogContentWrap>
        <small>
          <span>Category</span> <span>{date}</span>
        </small>
        <div className="blog-post-title">{title}</div>
        <div className="author-details">
          <span className="author-image-wrap">
            <Image
              width="32px"
              height="32px"
              layout="intrinsic"
              objectFit="cover"
              style={{
                borderRadius: "inherit",
              }}
              src={authorAvatar}
              alt={`blog-image ${id}`}
            />
          </span>
          <span className="author">{author}</span>
        </div>
      </BlogContentWrap>
    </BlogPostBlock>
  );
}

export default BlogPost;
