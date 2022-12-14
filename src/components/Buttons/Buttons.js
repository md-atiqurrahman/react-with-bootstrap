import React from 'react';

const Buttons = () => {
    return (
        <div>
            <div>
                 <h1>This my buttons group</h1>
            </div>
            <div>
                <button type="button" className="btn btn-primary">Primary</button>
                <button type="button" className="btn btn-secondary">Secondary</button>
                <button type="button" className="btn btn-success">Success</button>
                <button type="button" className="btn btn-danger">Danger</button>
                <button type="button" className="btn btn-warning">Warning</button>
                <button type="button" className="btn btn-info">Info</button>
                <button type="button" className="btn btn-light">Light</button>
                <button type="button" className="btn btn-dark">Dark</button>

                <button type="button" className="btn btn-link">Link</button>
            </div>
        </div>
    );
};

export default Buttons;