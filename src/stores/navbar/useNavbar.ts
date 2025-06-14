import { create } from 'zustand';
import type { NavbarState } from '@/interfaces';

export const useNavbar = create<NavbarState>((set) => ({
    displayNavbar: true,
    left: 'hub',
    title: 'hub',
    isLoggedIn: false,
    setLeft: (left) => set({ left }),
    setTitle: (title) => set({ title }),
    setIsLoggedIn: (state) => set({ isLoggedIn: state }),
    setDisplayNavbar: (displayNavbar) => set({ displayNavbar }),
}))