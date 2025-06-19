import type { sk_Hero_State } from '@/interfaces';
import { create } from 'zustand';


export const useSk_Hero = create<sk_Hero_State>((set) => ({
    sk_Hero: true,
    setSk_Hero: (sk_Hero) => set({ sk_Hero }),
}));