import React from "react";
const useScrollDirection = () => {
    const [scrollDirection, setScrollDirection] = React.useState("up");
    React.useEffect(() => {
        let lastScrollY = window.pageYOffset;
        let ticking = false;
        const updateScrollDirection = () => {
            const currentScrollY = window.pageYOffset;
            setScrollDirection(currentScrollY > lastScrollY ? "down" : "up");
            lastScrollY = (currentScrollY > 0) ? currentScrollY : 0;
            ticking = false;
        };
        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScrollDirection);
                ticking = true;
            }
        };
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);
    return scrollDirection;
};
export default useScrollDirection;
