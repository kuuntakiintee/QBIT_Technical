const comments = [
  {
    commentId: 1,
    commentContent: "Hai",
    replies: [
      {
        commentId: 11,
        commentContent: "Hai juga",
        replies: [
          { commentId: 111, commentContent: "Haai juga hai jugaa" },
          { commentId: 112, commentContent: "Haai juga hai jugaa" },
        ],
      },
      {
        commentId: 12,
        commentContent: "Hai juga",
        replies: [
          { commentId: 121, commentContent: "Haai juga hai jugaa" },
        ],
      },
    ],
  },
  {
    commentId: 2,
    commentContent: "Halooo",
  },
];


function countComments(comments) {
  let totalCount = 0;

  for (const comment of comments) {
    totalCount += 1; 
    if (comment.replies) {
      totalCount += countComments(comment.replies); 
    }
  }

  return totalCount;
}

// Memanggil fungsi dan mencetak hasil
const totalComments = countComments(comments);
console.log("Total Comments:", totalComments);
