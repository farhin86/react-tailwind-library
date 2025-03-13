import { useState } from "react";
import CommentBox from "./CommentBox";

interface Comments {
  comment: string;
  reply: Comments[];
}

// const comments = [
//   { comment: "how", reply: [{ comment: "how", reply: [] }] },
//   { comment: "are", reply: [] },
//   {
//     comment: "you",
//     reply: [{ comment: "Fine", reply: [{ comment: "Good", reply: [] }] }],
//   },
// ];

export default function Comments() {
  const [comments, setComments] = useState<Comments[]>([]);
  const [newComment, setNewComment] = useState("");

  function onDeleteComment(parentPath: string) {
    const decodeIndex = parentPath.split("-").filter(val => val.length >  0).map(Number);
    const newState = deleteComment(comments, decodeIndex);
    setComments(newState);
  }

  function addComment() {
    addRepliedComment(newComment, "")
    setNewComment("");
  }

  function deleteComment(_comments: Comments[], path: number[]) : Comments[] {
    if (path.length === 1) {
      return [..._comments].filter((item, index) => index !== path[0]);
    }
    const [index, ...remainingPath] = path;
    return _comments.map((comment, i) => {
      if (index === i) {
        const reply = deleteComment(comment.reply, remainingPath);
        return { ...comment, reply };
      }
      return comment;
    });
  }

  function createComment(_comments: Comments[], path: number[], newComment: string): Comments[] {
    if (!path.length) {
      return [..._comments, { comment: newComment, reply: [] }];
    }

    const [index, ...remainingPath] = path;

    return _comments.map((comment, i) => {
      if (index === i) {
        const reply = createComment(comment.reply, remainingPath, newComment);
        return { ...comment, reply };
      }
      return comment;
    });
  }

  function addRepliedComment(newComment, path: string) {
    const decodeIndex = path.split("-").filter(val => val.length >  0).map(Number);
    const newState = createComment(comments, decodeIndex, newComment);
    setComments(newState);
  }

  return (
    <div className="m-20">
      <h1 className="text-3xl mb-8">Comments</h1>
      <div className="flex gap-3 mb-4">
        <input
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add comment..."
          className="border-2 rounded p-1"
        />
        <button
          className="border-2 border-gray-600 rounded p-2 bg-gray-200"
          onClick={() => addComment()}
        >
          Add
        </button>
      </div>

      <div>
        {comments &&
          comments.map((comment, index) => {
            return (
              <div key={comment.comment}>
                <CommentBox
                  comment={{ ...comment }}
                  index={`${index}`}
                  onDelete={(parentPath: string) => onDeleteComment(parentPath)}
                  repliedComment={(comment: string, parentPath: string) =>
                    addRepliedComment(comment, parentPath)
                  }
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}
