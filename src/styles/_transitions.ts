// FM Variants for fading in an element as it enters the viewport and fading out as it exits
const scrollFadeVariants = {
    fadeOut: {
        opacity: 0,
        transition: {
            duration: .3
        }
    },
    fadeIn: {
        opacity: 1,
        transition: {
            duration: .3
        }
    }
};

export const scrollFade = {
    variants: scrollFadeVariants,
    initial: "fadeOut",
    whileInView: "fadeIn",
    viewport: {
        margin: "-20px 0px -20px 0px",
        amount: .8
    }
};

export const scrollFade20 = {
    variants: scrollFadeVariants,
    initial: "fadeOut",
    whileInView: "fadeIn",
    viewport: {
        margin: "-20px 0px -20px 0px",
        amount: .5
    }
};

// Landing page items (h1,h2 etc) animations for when the page first loads
// Also contains fade-in & fade-out for use with whileInView
export const landingPageContainerVariants = {
    animate: {
        transition: {
            delayChildren: .4,
            staggerChildren: 0.1
        }
    },
    
};

export const landingPageItemVariants = {
    initial: { 
        y: 20,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: .3,
        }
    },
    fadeIn: {
        opacity: 1,
        transition: {
            duration: .2
        }
    },
    fadeOut: {
        opacity: 0,
        transition: {
            duration: .2
        }
    }
};

// Header home link animation for when the page first loads
export const homeLinkVariants = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            duration: .3,
            delay: 1,
            ease: "easeInOut"
        }
    }
};

// Header nav links animations for when the page first loads
export const navLinksContainerVariants = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

export const navLinksItemVariants = {
    initial: { 
        opacity: 0,
        y: "-1.25rem"
    },
    animate: { 
        opacity: 1,
        y: 0,
        transition: {
            duration: .3
        }
    }
};

// Header hamburger button animations for when the page first loads
export const hamburgerVariants = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 1,
            duration: .3,
            ease: "easeInOut"
        }
    }
};

// Hide header on scroll
// Unfortunately framer motion has a bug when rendering backgroundFilter = blur()
// This feature has therefore been implemented using plain old css
export const headerScrollVariants = {
    initial: {
        y: 0
    },
    animateScrollUp: {
        y: 0,
        backdropFilter: "blur(6px)",
        boxShadow: "0 2px 16px rgba(0,0,0,.4)"
        
    },
    animateScrollDown: {
        y: "-100%",
        transition: {
            duration: .3
        }
    }
};

// Social button fade in and page scroll animations
export const socialLinksContainerVariants = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            delayChildren: 1.2,
            staggerChildren: .1
        }
    },
    scrollIn: {
        opacity: 0,
        y: "100%"   
    },
    scrollOut: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .3
        }
    }
};

export const socialLinksItemVariants = {
    initial: { 
        opacity: 0,
    },
    animate: { 
        opacity: 1,
        transition: {
            duration: .3
        }
    }
};