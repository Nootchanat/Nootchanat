import React from 'react'

export const PostFunction = (props) => {
    const myName ="Nootchanat";
   
    return (
        <div>
            
                <p>
                    <b>Text :</b>{props.content} 
                </p>
                <p>
                    < b >Post By</b>{props.name} </p>
            
        </div>
    );
};
