import React from 'react';

import Tweet from './Tweet/Tweet';

const Tweets = ({ tweets }) => {
    return (
        <div className="col-sm-8 offset-2">
            <div className="row">
                    { tweets.map((tweet, idx) => <Tweet key={`tweet.location${idx}`} tweet={tweet} />) }
            </div>
        </div>
    )
}

export default Tweets;
