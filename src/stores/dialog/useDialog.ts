import { create } from 'zustand';
import type { DialogInterface } from '@/interfaces';

export const useDialog = create<DialogInterface>((set) => ({
    dialogDisplay: false,
    dialogTitle: 'default title',
    dialogSubtitle: 'default subtitle',
    dialogAddImg: false,
    dialogImgUrl: 'https://placehold.co/300',
    dialogDescription: 'default description',
    dialogCloseText: 'default close',
    setDialogDisplay: (dialogDisplay) => set({ dialogDisplay }),
    setDialogTitle: (dialogTitle) => set({ dialogTitle }),
    setDialogAddImg: (dialogAddImg) => set({ dialogAddImg }),
    setDialogImgUrl: (dialogImgUrl) => set({ dialogImgUrl }),
    setDialogSubtitle: (dialogSubtitle) => set({ dialogSubtitle }),
    setDialogDescription: (dialogDescription) => set({ dialogDescription }), 
    setDialogCloseText: (dialogCloseText) => set({ dialogCloseText }),

}))