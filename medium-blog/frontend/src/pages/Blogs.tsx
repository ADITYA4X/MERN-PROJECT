import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { useBlogs } from "../hooks";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();

  console.log(blogs);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Appbar />
      <div className=" flex justify-center">
        <div>
          {blogs.map((blog) => (
            <BlogCard
              key={blog.title}
              id={blog.id}
              authorName={blog.author.name || "Author"}
              title={blog.title}
              content={blog.content}
              publishedDate={"16 Dec 2024"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
