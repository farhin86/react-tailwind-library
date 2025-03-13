import { useState } from "react";
import Profile from "../../../assets/react.svg";

export default function CommentBox({
  comment,
  onDelete,
  repliedComment,
  index,
}) {
  const [openReply, setOpenReply] = useState(false);
  const [newComment, setNewComment] = useState("");

  function addComment() {
    setOpenReply(false);
    setNewComment("");
    repliedComment(newComment, index);
  }

  return (
    <>
      <div className="flex gap-3 rounded bg-gray-200 p-3 mb-2 h-20 items-center">
        <img
          className="w-8 h-8 bg-black mr-3"
          alt="profile-image"
          src={Profile}
        />
        <div className="">
          <div className="">{comment.comment}</div>
          {openReply ? (
            <div className="flex gap-4 mt-1">
              <input
                className="p-1"
                placeholder="Reply..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <button onClick={() => addComment()}>Add</button>
              <button
                onClick={() => {
                  setOpenReply(false);
                  setNewComment("");
                }}
              >
                Cancel
              </button>
            </div>
          ) : (
            <div className="flex gap-4">
              <button onClick={() => setOpenReply(true)}>Reply</button>
              <button onClick={() => onDelete(index)}>Delete</button>
            </div>
          )}
        </div>
      </div>
      <div className="ml-10">
        {comment?.reply &&
          comment.reply.map((comment, newIndex) => {
            return (
              <div key={comment.comment}>
                <CommentBox
                  comment={{ ...comment }}
                  index={`${index}-${newIndex}`}
                  onDelete={(parentPath: string) => onDelete(parentPath)}
                  repliedComment={(comment: string, parentPath: string) =>
                    repliedComment(comment, parentPath)
                  }
                />
              </div>
            );
          })}
      </div>
    </>
  );
}
