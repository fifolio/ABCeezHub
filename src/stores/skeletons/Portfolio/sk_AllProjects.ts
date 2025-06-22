
import type { sk_AllProjects_State } from '@/interfaces';
import { create } from 'zustand';


export const useSk_AllProjects = create<sk_AllProjects_State>((set) => ({
    sk_AllProjects: true,
    setSk_AllProjects: (sk_AllProjects) => set({ sk_AllProjects }),
}));