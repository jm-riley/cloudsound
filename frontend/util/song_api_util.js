export const uploadSong = song =>
  $.ajax({
    method: 'POST',
    url: `/api/songs`,
    data: song,
    contentType: false,
    processData: false
  });

export const fetchSong = id =>
  $.ajax({
    method: 'GET',
    url: `/api/songs/${id}`
  });

export const updateSong = ({ song, id }) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/songs/${id}`,
    data: song,
    contentType: false,
    processData: false
  });
};

export const deleteSong = id =>
  $.ajax({
    method: 'DELETE',
    url: `/api/songs/${id}`
  });
