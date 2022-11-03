import React from "react";
import {
  FaRegCheckCircle,
  FaComment,
  FaRegChartBar,
  FaHeart,
  FaLeaf,
} from "react-icons/fa";
const Posts = () => {
  return (
    <div className="postss">
      <div className="postss__first">
        <div className="posts__first__img">
          <img src="/images/profile.jpg" alt="profile img" />
        </div>
        <div className="posts__first__name">
          <strong>vivek Pathak</strong> <FaRegCheckCircle className="verify" />
        </div>
        <div className="posts__first__username">
          @vikpthk02 <span>1.2k</span>
        </div>
      </div>
      <div className="postss__details">
        <div className="postss__details__msg">
          .@imVkohli, it was undoubtedly the best innings of your life. It was a treat to watch you play,
          the six off the back foot in the 19th over against Rauf over long on was spectacular! 😮Keep it going.
        </div>
        <div className="postss__details__img">
          <img src="/images/post.webp" alt="post" />
        </div>
        <div className="reactions">
          <span>
            <FaComment className="re" /> 45
          </span>
          <span>
            <FaRegChartBar className="re" /> 4
          </span>
          <span>
            <FaHeart className="re" /> 345
          </span>
          <span>
            <FaLeaf className="re" /> 234
          </span>
        </div>
      </div>
    </div>
  );
};

export default Posts;
