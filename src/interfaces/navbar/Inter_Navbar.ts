export default interface NavbarState {
    displayNavbar: boolean;
    left: string;
    title: string;
    isLoggedIn: boolean;
    setLeft: (left: string) => void;    
    setTitle: (title: string) => void;
    setIsLoggedIn: (isLoggedIn: boolean) => void;
    setDisplayNavbar: (displayNavbar: boolean) => void;
}