export const fetchComments = songId =>
  $.ajax({
    method: 'GET',
    url: `/api/songs/${songId}/comments`
  });

export const createComment = comment => {
  return $.ajax({
    method: 'POST',
    url: `/api/songs/${comment.songId}/comments`,
    data: { comment }
  });
};

export const deleteComment = id =>
  $.ajax({
    method: 'DELETE',
    url: `/api/comments/${id}`
  });
