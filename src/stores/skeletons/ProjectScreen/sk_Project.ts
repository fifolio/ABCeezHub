
import type { sk_Project_State } from '@/interfaces';
import { create } from 'zustand';


export const useSk_Project = create<sk_Project_State>((set) => ({
    sk_Project: true,
    setSk_Project: (sk_Project) => set({ sk_Project }),
}));