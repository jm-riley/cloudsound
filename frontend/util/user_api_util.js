export const fetchUser = id =>
  $.ajax({
    method: 'GET',
    url: `/api/users/${id}`
  });

export const signup = user =>
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user }
  });

export const login = user =>
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user }
  });

export const logout = () =>
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  });

export const updateUser = ({ user, id }) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${id}`,
    data: user,
    contentType: false,
    processData: false
  });
};

export const fetchListeningHistory = song_id => {
  return $.ajax({
    method: 'POST',
    url: `/api/songs/${song_id}/listen`,
    data: song_id
  });
};
