import React, { Component } from 'react';
import { connect } from 'react-redux';

import Tweets from './components/Tweets/Tweets';
import Button from './components/Button/Button';
import * as actionTypes from './store/actions/actions';

import './App.css';

class App extends Component {
  getTweetsOne = () => {
    this.props.onFetchTweetsOne();
  }
  
  getTweetsTwo = () => {
    this.props.onFetchTweetsTwo();
  }

  filterPorperties(tweet) {
    const { media } = tweet && tweet["extended_entities"];
    const { additional_media_info: { source_user } = {}, media_url } = media && media[0];
    const { description, name, location } = source_user || {};
    const filterTweetObj = { description, name, location, media_url };

    for (let prop in filterTweetObj) {
      if (!filterTweetObj[prop]) return;
    }

    return filterTweetObj;
  }

  transformObjectToArray({ tweets }) {
    const tweetsArr = [];
    for (let prop in tweets) {
      const filterObj = this.filterPorperties(tweets[prop]);
      if (filterObj) {
        tweetsArr.push(filterObj);
      }
    }
    return tweetsArr;
  }

  renderTweets(tweetsObj) {
    const tweets = this.transformObjectToArray(tweetsObj);
    return (<Tweets tweets={tweets} />);
  }

  render() {
    const { tweetsOne, tweetsTwo } = this.props;
    return (
      <div className="App">
        <div className="my-3">
          <Button btnStatus="primary" classes="mr-4" onBtnClick={this.getTweetsOne}>Trump Tweets</Button>
          <Button btnStatus="primary" onBtnClick={this.getTweetsTwo}>Clinton Tweets</Button>
        </div>
      
        {
          tweetsOne && (
            <div>
              { this.renderTweets(tweetsOne) }
            </div>
          )
        }

        {
          tweetsTwo && (
            <div>
              { this.renderTweets(tweetsTwo) }
            </div>
          )
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { tweetsOne, tweetsTwo } = state;
  return {
    tweetsOne,
    tweetsTwo
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchTweetsOne: () => dispatch(actionTypes.tweetsUserOneRequest()),
    onFetchTweetsTwo: () => dispatch(actionTypes.tweetsUserTwoRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
