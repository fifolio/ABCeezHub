
import type { sk_AllArticles_State } from '@/interfaces';
import { create } from 'zustand';


export const useSk_AllArticles = create<sk_AllArticles_State>((set) => ({
    sk_AllArticles: true,
    setSk_AllArticles: (sk_AllArticles) => set({ sk_AllArticles }),
}));