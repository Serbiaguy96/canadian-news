/** @jsxImportSource @emotion/react */
import React from "react";
import { comments } from "./commentsDb";

import * as S from "./styles";

const Comments = () => {
  const renderAllComments = (comment) => {
    return (
      <div css={S.commentRowCss}>
        <div css={S.commentPhotoCss}>
          <img src={comment.img} alt={comment.name}/>
        </div>
        <div css={S.commentContent}>
          <div css={S.commentName}>{comment.name}</div>
          <div css={S.commentText}>{comment.comment}</div>
          <div css={S.commentStats}>
            <a href="/#">Reply</a>
            <a href="/#">I Like</a>
            <span>{comment.time}</span>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div css={S.commentsContainer}>
      <h1 css={S.commentsHeader}>{`${comments.length} comments`}</h1>
      <textarea css={S.textAreaCss} placeholder="Add a comment ..."/>
      {comments.map(renderAllComments)}
    </div>
  )
}

export default Comments;
