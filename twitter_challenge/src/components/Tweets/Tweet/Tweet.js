import React from 'react';

const Tweet = props => {
    const { description, name, location, media_url } = props.tweet;
    return (
        <div className="col-sm-6 mb-3">
            <div className="card">
                <img src={`${media_url}`} style={{ maxHeight: "235px" }} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{ name }</h5>
                    <p className="card-text">Location: { location }</p>
                    <p className="card-text">{ description }</p>
                    <a href="#" className="btn btn-primary">More Info</a>
                </div>
            </div>
        </div>
    )
}

export default Tweet;
