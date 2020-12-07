import React from "react";

export default ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    let content;

    if (comment.status === "approved") {

      content = comment.content;

    } else if (comment.status === "rejected") {

      content = "This comment has been moderated";

    } else {

      content = "Pending comment";
    }

    return <li key={comment.id}>{content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};
