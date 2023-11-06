import BlogPageGrid from "../components/Blog/BlogPageGrid";
import Searchbar from "../components/Searchbar/Searchbar";
import { useEffect, useState } from "react";
import { allBlogsData } from "../data/BlogData";

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  },[]);

  const [results, setResults] =
    useState<
      {
        id: number;
        category: string;
        thumbnail: string;
        title: string;
        date: string;
        author: string;
        url: string;
      }[]
    >(allBlogsData);

  const handleSearch = (term: string) => {
    const filteredResults = allBlogsData.filter((results) =>
      results.title.toLowerCase().includes(term.toLowerCase())
    );
    setResults(filteredResults);
  };

  return (
    <main className="main">
      <Searchbar onSearch={handleSearch} />
      <BlogPageGrid results={results} />
    </main>
  );
};

export default BlogPage;
