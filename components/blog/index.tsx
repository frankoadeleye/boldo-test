import Svgs from "assets/svgs";
import BlogPost from "common/blog-post";
import HorizontalLine from "common/horizontal-line";
import LatestPostCard from "common/latest-post-card";
import { Seperator } from "common/seperator";
import {
  BlogBlock,
  BlogHeader,
  LatestPostSection,
  LatestPostsWrap,
  SubscribeBanner,
  LoadMoreBtnWrap,
} from "./styled";
import { BlogLatestPostData } from "./data";
import Button from "common/button";
import FormInput from "common/form-input";

const { BlogImageSample2, BlogAuthorAvatarSample } = Svgs;

const BlogPostData = {
  id: 1,
  imageSrc: BlogImageSample2,
  title: "Pitch termsheet backing validation focus release.",
  date: "November 22, 2021",
  authorAvatar: BlogAuthorAvatarSample,
  author: "Chandler Bing",
};

function Blog() {
  return (
    <BlogBlock>
      <BlogHeader>
        <small>Blog</small>
        <div>Thoughts and words</div>
      </BlogHeader>
      <Seperator />
      <BlogPost data={BlogPostData} />
      <HorizontalLine />
      <LatestPostSection>
        <div className="header">Latest news</div>
        <LatestPostsWrap>
          {BlogLatestPostData.map((data) => {
            return <LatestPostCard data={data} key={data.id} />;
          })}
        </LatestPostsWrap>
        <LoadMoreBtnWrap>
          <Button Size="large" text="Load more" />
        </LoadMoreBtnWrap>
      </LatestPostSection>
      <SubscribeBanner>
        <div className="subscribe-text">
          An enterprise template to ramp up your company website
        </div>
        <form className="subscribe-form">
          <FormInput type="text" placeholder="Your email address" />
          <button>Start now</button>
        </form>
      </SubscribeBanner>
    </BlogBlock>
  );
}

export default Blog;
