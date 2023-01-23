import { Icon } from "@iconify/react"
import "./list.scss"
import { useRef } from "react"
import { useState } from "react"
import ListItem from "../listitem/ListItem"

export default function List({list}) {

    const [slideNumber, setSlideNumber] = useState(0);

    const listRef = useRef();

    const handleClick = (dir) => {
        let dist = listRef.current.getBoundingClientRect().x -50;
        if (dir === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${dist + 235}px)`;
        }
        if (dir === "right" && slideNumber < 6) {
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${dist - 235}px)`;
        }
    };

    return (
        <div className="list">
            <span className="listTitle">{list.title}</span>
            <div className="wrapper">
                <Icon icon="material-symbols:arrow-back-ios" className="left_icon" onClick={() => handleClick("left")}></Icon>
                
                <div className="container" ref={listRef}> 
                    {list.content.map((item) => (
                        <ListItem item={item}/>
                    ))};
                </div>

                <Icon icon="material-symbols:arrow-forward-ios" className="right_icon" onClick={() => handleClick("right")}></Icon>
            </div>
        
        </div>
    );
};
