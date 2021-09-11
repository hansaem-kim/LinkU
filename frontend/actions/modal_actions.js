export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

export const showModal = (modal, id) => {
    return {
        type: SHOW_MODAL,
        modal,
        id
    }

}

export const hideModal = () => ({
    type: HIDE_MODAL
});