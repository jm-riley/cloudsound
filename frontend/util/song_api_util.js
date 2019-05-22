export const uploadSong = song =>
  $.ajax({
    method: 'POST',
    url: `/api/songs`,
    data: song,
    contentType: false,
    processData: false
  });
