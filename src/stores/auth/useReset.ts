import { create } from 'zustand';

interface UseResetInterface {
    displayResetPasswordForm: boolean;
    setDisplayResetPasswordForm: (state: boolean) => void;
}

const useReset = create<UseResetInterface>((set) => ({
    displayResetPasswordForm: false,
    setDisplayResetPasswordForm: (state) => set({ displayResetPasswordForm: state })
}))

export default useReset;