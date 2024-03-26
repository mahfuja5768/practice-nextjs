import { Suspense } from "react";

const Heavy = () => {
  return (
    <div>
      <h2>Heavy page</h2>
      <Suspense fallback={<h1>Loading posts....</h1>}>
        <p>All posts</p>
      </Suspense>
    </div>
  );
};

export default Heavy;
