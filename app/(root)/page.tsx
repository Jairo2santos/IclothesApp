
import ThreadCard from "@/components/cards/ThreadCard";
import { fetchPost } from "@/lib/actions/thread.actions";

import { currentUser } from "@clerk/nextjs";

export default async function Home() {

  const result = await fetchPost(1,30);
  const user = await currentUser();

  console.log(result)
  return (
    // <UserButton afterSignOutUrl="/" />
    <>
    <h1 className="head-text text-left">home</h1>
    <section className="mt-3 flex flex-col gap-4">
      {result.posts.length === 0 ?(
        <p className="no-result">No hay posteos para mostrar</p>
      ): (
        <>
        {result.posts.map((post) => (
       
          <ThreadCard
          key={post._id}
          id={post._id}
          currentUserId={user?.id || "" }
          parentId={post.parentId}
          content={post.text}
          author={post.author}
          community={post.community}
          cretedAt={post.createdAt}
          comments={post.children}
          />
        ))}
        </>
      ) }
    </section>
    </>
  );
}
