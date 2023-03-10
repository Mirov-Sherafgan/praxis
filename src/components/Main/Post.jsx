import React from 'react';
import ReactPlayer from "react-player";

const Post = ({post}) => {
  return (
      <article className="grid gap-6 mt-8   drop-shadow-2xl" key={post.id}>
        <h3
            className="text-5xl sticky top-[80px] z-40 dark:bg-gradient-to-r dark:from-purple-900 dark:via-purple-800 dark:to-blue-500 dark:text-white dark:shadow-none bg-slate-200 dark:border-b-0 border-b-8 text-slate-500 rounded-b-lg shadow-2xl  font-bold italic px-6 pb-2">
          {post.day}
        </h3>
        {post?.blockquote}

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
        {post?.image && <img
            src={post?.image}
            className="object-cover rounded-2xl p-2 brightness-125"
            alt="расписание"
        />}
        <div data-aos="fade-up"
           data-aos-anchor-placement="top-bottom">
          {post.desc}
          {post?.image2 && <img src={post?.image2} alt="Картинка"/>}
          {post?.blockquote2}
        </div>
        <div>
          {post.schedule}
        </div>

        <div className="text-start">{post?.footer}</div>

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