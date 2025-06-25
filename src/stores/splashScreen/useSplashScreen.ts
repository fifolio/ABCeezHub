import { create } from 'zustand';

interface useSplashScreenInterface {
    displaySplashScreen: boolean;
    setDisplaySplashScreen: (state: boolean) => void;
}

const useSplashScreen = create<useSplashScreenInterface>((set) => ({
    displaySplashScreen: false,
    setDisplaySplashScreen: (state) => set({ displaySplashScreen: state })
}))

export default useSplashScreen;