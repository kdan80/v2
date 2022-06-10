import React from "react";

const useScrolledToTop = () => {

    const [scrolledToTop, setScrolledToTop] = React.useState(true);

    React.useEffect(() => {

        const handleScroll = () => {
            if (window.innerWidth > 768 ) return (window.pageYOffset >= 150) ? setScrolledToTop(false) : setScrolledToTop(true);
            return (window.pageYOffset > 0) ? setScrolledToTop(false) : setScrolledToTop(true);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    },[]);

    return scrolledToTop; 
};

export default useScrolledToTop;