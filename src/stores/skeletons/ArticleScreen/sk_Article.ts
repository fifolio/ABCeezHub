import type { sk_Article_State } from '@/interfaces';
import { create } from 'zustand';


export const useSk_Article = create<sk_Article_State>((set) => ({
    sk_Article: true,
    setSk_Article: (sk_Article) => set({ sk_Article }),
}));