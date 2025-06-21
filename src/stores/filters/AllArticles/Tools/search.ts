import { create } from 'zustand';
import type { SearchInterface } from '@/interfaces';

export const useSearch = create<SearchInterface>((set) => ({
    searchTerm: '',
    setSearchTerm: (searchTerm) => set({ searchTerm }),
}))