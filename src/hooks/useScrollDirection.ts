import React from "react";

const useScrollDirection = (): string => {

    const [scrollDirection, setScrollDirection] = React.useState<string>("up");

    React.useEffect(() => {
        let lastScrollY: number = window.pageYOffset;
        let ticking: boolean = false;

        const updateScrollDirection= () => {
            const currentScrollY: number = window.pageYOffset;
      
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
        }
    }, []);

    return scrollDirection; 
};

export default useScrollDirection;