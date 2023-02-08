import React from 'react';
import ReactPlayer from "react-player";

const Post = ({post}) => {
  return (
      <article className="grid gap-6 mt-8   drop-shadow-2xl" key={post.id}>
        {post?.blockquote}
        <h3
            className="text-5xl sticky top-[80px] z-40 bg-slate-200 border-b-8 text-slate-500 rounded-b-lg shadow-2xl  font-bold italic px-6 pb-2">
          {post.day}
        </h3>
        {post?.emergency && <div className='relative pt-[56.25%]'>
          <ReactPlayer
              config={{file: {attributes: {controlsList: 'nodownload'}}}}
              className='absolute top-0 left-0'
              url={[post.emergency]}
              width='100%'
              height='100%'
              controls
              playing={true}
          />
        </div>}
        <img src={post?.image}
             className="object-cover rounded-2xl p-2 brightness-125"
             alt="расписание"
        />
        <p data-aos="fade-up"
           data-aos-anchor-placement="top-bottom">
          {post.desc}
          {post?.blockquote2}
        </p>
        {post.schedule}

        {post.video && <div className='relative pt-[56.25%]'>
          <ReactPlayer
              config={{file: {attributes: {controlsList: 'nodownload'}}}}
              className='absolute top-0 left-0'
              url={[post.video]}
              width='100%'
              height='100%'
              controls
          />
        </div>}
      </article>
  );
};

export default Post;