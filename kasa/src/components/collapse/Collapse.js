import React, {useState}  from "react";
import './Collapse.css';

export default function Collapse(props){

    const [isOpen , setIsOpen]=useState(false)

    const handleOpenCollapse = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="collapse">
           
            <div className="collapsible" onClick={handleOpenCollapse}>
                {props.title}
                <i className={isOpen ? "arrow up" : "arrow down"}></i>
            </div>
                
            
            <div className={isOpen ? "contentCollapseOpen" : "contentCollapseClose"}>
            
                
                { props.content instanceof Array ? 
                    props.content.map(( contentline,index) => {
                        return <p key={index}> {contentline} </p>;
                    }) 
                    : <p>{props.content}</p> 
                }
                    

            </div>
        </div>
    );
}