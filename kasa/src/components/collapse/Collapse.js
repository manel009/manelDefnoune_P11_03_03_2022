import React, {useState}  from "react";
import './Collapse.css';

export default function Collapse(props){

    const [isOpen , setIsOpen]=useState(true)

    const handleOpenCollapse = () => {
        console.log("click");
        setIsOpen(!isOpen);
    }

    return (
        <div className="collapse">
            
            <div onClick={handleOpenCollapse} >
                <div className="collapsible">
                    {props.title}
                    <i className={isOpen ? "arrow up" : "arrow down"}></i>
                </div>
                
            </div>
            
            <div className={isOpen ? "contentCollapseOpen" : "contentCollapse"}>
                <p>{props.content}</p>
            </div>
        </div>
    );
}