import { create } from 'zustand';
import type { SortByInterface } from '@/interfaces';

export const useSortBy = create<SortByInterface>((set) => ({
    sortBy: 'newest',
    setSortBy: (sortBy) => set({ sortBy }),
}))