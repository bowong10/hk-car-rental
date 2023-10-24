import React from 'react'

const Error = () => {
    return (
        <div className="inner90">
            <h3>404, the requested URL {window.location.pathname} does not exist on the server.</h3>
            {/* {window.location.href} */}
        </div>
    );
};

export default Error
