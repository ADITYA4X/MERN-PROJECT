import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";

export const Blogs = () => {
  return (
    <div>
      <Appbar />
      <div className=" flex justify-center">
        <div className=" max-w-xl">
          <BlogCard
            authorName={"Aditya Kumar"}
            title={
              "The Evolution of Software Development: New Tools, Trends, and Techniques for Developers "
            }
            content={
              "Software development has undergone a remarkable transformation over the decades, evolving from basic coding practices to a sophisticated discipline that drives modern innovation. Today, developers operate in a landscape shaped by powerful tools, emerging trends, and advanced techniques that make building software faster, more efficient, and more collaborative. This article explores the journey of software development and highlights the most impactful advancements shaping the industry today."
            }
            publishedDate={"16 Dec 2024"}
          />
          <BlogCard
            authorName={"Aditya Kumar"}
            title={
              "The Evolution of Software Development: New Tools, Trends, and Techniques for Developers "
            }
            content={
              "Software development has undergone a remarkable transformation over the decades, evolving from basic coding practices to a sophisticated discipline that drives modern innovation. Today, developers operate in a landscape shaped by powerful tools, emerging trends, and advanced techniques that make building software faster, more efficient, and more collaborative. This article explores the journey of software development and highlights the most impactful advancements shaping the industry today."
            }
            publishedDate={"16 Dec 2024"}
          />
          <BlogCard
            authorName={"Aditya Kumar"}
            title={
              "The Evolution of Software Development: New Tools, Trends, and Techniques for Developers "
            }
            content={
              "Software development has undergone a remarkable transformation over the decades, evolving from basic coding practices to a sophisticated discipline that drives modern innovation. Today, developers operate in a landscape shaped by powerful tools, emerging trends, and advanced techniques that make building software faster, more efficient, and more collaborative. This article explores the journey of software development and highlights the most impactful advancements shaping the industry today."
            }
            publishedDate={"16 Dec 2024"}
          />
        </div>
      </div>
    </div>
  );
};
