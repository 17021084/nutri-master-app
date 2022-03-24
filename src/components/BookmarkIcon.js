import React from "react";
import bookmark from "../../../assets/icons/bookmark.png";
import unBookmark from "../../assets/icons/unbookmark.png";

export default function BookmarkIcon({ isBookmark }) {
  return (
    <Image
      style={{
        height: 40,
        width: 40,
      }}
      source={isBookmark ? bookmark : unBookmark}
    />
  );
}
