import React from "react";

const Container = props => (
    <div style={{width: '80%', margin: '0 auto'}}>
        {props.children}
    </div>
);

export default Container;