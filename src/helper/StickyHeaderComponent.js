import {useEffect, useState} from 'react';

const StickyHeaderComponent = () => {
    const [scrollTop, setScrollTop] = useState(0);

    // console.log(document.getElementsByClassName("title-sticky-top")[0]);

    useEffect(() => {
        let header = document.getElementsByClassName("title-sticky-top")[0];
        if(header){
            let sticky = header?.offsetTop;
            function onScroll() {
                let currentPosition = window.pageYOffset; // or use document.documentElement.scrollTop;
                if (currentPosition > 10) {
                    header.classList.add("isSticky");
                    console.log("Sticky ", sticky, "Curr Pos ", currentPosition);
                } else {
                    header.classList.remove("isSticky");
                    console.log("Not Sticky ", sticky, "Curr Pos ", currentPosition);
                }
                setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
            }
            window.addEventListener("scroll", onScroll);
            return () => window.removeEventListener("scroll", onScroll);
        }
    }, [scrollTop]);
};

export default StickyHeaderComponent;