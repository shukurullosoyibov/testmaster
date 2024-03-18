import  { blogData } from "@/constants/blogData";
import { Banner } from "..";
import BlogAccordion from "./BlogAccordion";

const Blog = () => {
  return (
    <section
      id="blog"
      role="main"
      aria-label="Blogs, news about accounting services at Almuda Company"
      className="my-20 w-full"
    >
      <div className="container">
        <Banner title="Blogs" text="Frequently Asked Questions" />

        <div
          role="main"
          aria-label="Frequently Asked Questions"
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-6  space-4 py-10 md:py-20 "
        >
          {blogData?.map((blog, index) => (
            <BlogAccordion key={index} blogData={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
