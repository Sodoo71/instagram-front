"use client";
import { useContext, useEffect, useState } from "react";
import { User, UserContext } from "./providers/UserProvider";
import { redirect } from "next/navigation";
import { Navbar } from "./components/Navbar";
import { Heart, MessageCircle, Bookmark, Send } from "lucide-react";


type Post = {
  _id: string;
  imageUrl: string;
  description: string;
  createdAt: Date;
  createdBy: User | null;
};

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const { user, setToken, loading } = useContext(UserContext);

  useEffect(() => {
    fetch("http://localhost:5500/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  if (loading) {
    return <>Loading....</>;
  }

  if (!user) {
    return redirect("/signin");
  }

  return (
    <div>
      <Navbar />

      <div className="w-[600px] flex flex-col gap-4 mx-auto ">
        {posts.map((post) => (
          <div
            key={post._id}
            className="bg-black rounded-lg shadow-md p-4 flex flex-col gap-2"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="uppercase bg-gray-300 h-8 w-8 rounded-full flex items-center justify-center text-gray-600 font-bold">
                {post.createdBy?.username?.[0]?.toUpperCase() || "U"}
              </div>
              <div>
                <span className="font-semibold">{post.createdBy?.username}</span>
                <span className="text-xs text-gray-400 ml-2">
                  {new Date(post.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>
            <img
              src={post.imageUrl}
              alt=""
              className="w-full -h-96 object-cover rounded-md"
            />
            <div>
            </div>
            <div className="flex gap-2">
              <Heart className="cursor-pointer hover:text-red-500" size={20} />
              <MessageCircle className="cursor-pointer hover:text-blue-500" size={20} />
              <Send className="cursor-pointer hover:text-blue-500" size={20} />
              <Bookmark className="cursor-pointer hover:text-blue-500" size={20}/>
            </div>
            <div className="flex gap-2">
            
              <input 
                type="text" 
                placeholder="Add a comment..." 
                className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-gray-500"
              />
            </div>
            <p className="mt-2 text-white-800">{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
