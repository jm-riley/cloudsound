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
  debugger;
  return $.ajax({
    method: 'PATCH',
    url: `/api/songs/${id}`,
    data: song,
    contentType: false,
    processData: false
  });
};
