import { useRouter } from "next/router";
function BlogPostsPage() {
    const router = useRouter();
    console.log("router:", router.query)
  return <div>BlogPostsPage</div>;
}

export default BlogPostsPage;