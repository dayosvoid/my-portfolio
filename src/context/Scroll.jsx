
import { useCallback, useRef, createContext } from "react";

export const ScrollContext = createContext(null);

const ScrollContextProvider = ({ children }) => {
    const sectionRefs = useRef({});

    const registerSectionRef = useCallback((key, ref) => {
        sectionRefs.current[key] = ref;
    }, []);

    const scrollToSection = useCallback((key) => {
        const ref = sectionRefs.current[key];
        if (ref && ref.current) {
            window.scrollTo({
                top: ref.current.offsetTop,
                behavior: 'smooth',
            });
        }
    }, []);

    return (
        <ScrollContext.Provider value={{ scrollToSection, registerSectionRef }}>
            {children}
        </ScrollContext.Provider>
    );
};

export default ScrollContextProvider;

