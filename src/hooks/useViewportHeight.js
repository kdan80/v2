import React from "react";
const useViewportHeight = (height) => {
    const [viewportHeight, setViewportHeight] = React.useState(height);
    React.useEffect(() => {
        setViewportHeight(window.innerHeight);
        // This function is debounced to prevent excessive function calls
        const handleWindowResize = (cb) => {
            let timer;
            return () => {
                if (timer)
                    window.clearTimeout(timer);
                timer = window.setTimeout(cb, 100);
            };
        };
        window.addEventListener("resize", handleWindowResize(() => setViewportHeight(window.innerHeight)));
        return () => window.removeEventListener("resize", handleWindowResize(() => setViewportHeight(window.innerHeight)));
    }, []);
    return viewportHeight;
};
export default useViewportHeight;
