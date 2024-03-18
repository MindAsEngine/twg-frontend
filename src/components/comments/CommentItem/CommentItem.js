import RatingComponent from "../../rating/Rating";
import userImg from "../../../img/userIcon.svg";
import ShowMoreComment from "../../showMore/ShowMoreComment";
import "./style.scss";

const CommentItem = ({ userAvatar, userName, userRating, userComment }) => {
  return (
    <div className="comment__body">
      <div className="user__comment">
        <div className="user__avatar">
          {userAvatar == null ? (
            <img src={userImg} alt="" />
          ) : (
            <img src={userAvatar} alt="" />
          )}
        </div>
        <div className="user__feedback">
          <p className="user__name">{userName}</p>
          <RatingComponent readonly={true} ratingAverage={userRating} />
          <ShowMoreComment content={userComment} height={30} />
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
