export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = content => ({
  type: OPEN_MODAL,
  content
});

export const closeModal = () => ({
  type: CLOSE_MODAL
});
