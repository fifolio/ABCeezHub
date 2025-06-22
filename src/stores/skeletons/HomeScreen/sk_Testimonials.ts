import type { sk_Testimonials } from '@/interfaces';
import { create } from 'zustand';


export const useSk_Testimonials = create<sk_Testimonials>((set) => ({
    sk_Testimonials: true,
    setSk_Testimonials: (sk_Testimonials) => set({ sk_Testimonials }),
}));