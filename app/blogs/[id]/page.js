import blogs from "@/app/data/blogs";

export function generateStaticParams() {
  return blogs.map((blog) => ({
    id: blog.id,
  }));
}

const SingleBlog = ({ params }) => {
  const { id } = params;
  const blog = blogs.find((blog) => blog.id === id);

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold mb-5">{blog.title}</h1>
      <p>{blog.description}</p>
    </div>
  );
};

export default SingleBlog;
