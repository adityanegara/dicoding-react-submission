import create from "zustand";

const uiStore = create(set => ({
    isModalOpen: false,
    isDetailModalOpen: false,
    createModalBackgroundColor: 'orange',
    toggleModalOpen : () => set(state =>({isModalOpen: !state.isModalOpen})),
    toggleDetailModalOpen: () => set(state=>({isDetailModalOpen: !state.isDetailModalOpen})),
    changeCreateModalBackgroundColor: (newColor) =>set({createModalBackgroundColor: newColor}) 
}))

export default uiStore;