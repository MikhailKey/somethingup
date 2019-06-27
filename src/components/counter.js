import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
//import {bindActionCreators} from 'redux';

const Counter = ({counter, inc, dec, res}) => {
    return (
      <>
      <div class="main-block">
      <h1 id="counter" class="main-block-counter">{counter}</h1>
    </div>
    <div class="buttons">
            <div class="button-cover">
                <button onClick={inc} class="button-plus">
                  <img src="img/Plus.png" alt="plus"></img>
                </button>
          </div>
            <div class="button-cover">
                <button onClick={dec} class="button-minus"><img src="img/Minus.png" alt="Minus"></img></button>
          </div>
          <div class="button-cover">
              <button onClick={res} class="button-reset"><img src="img/Reset.png" alt="Reset"></img></button>
        </div>
        </div>
        </>
    )
}
const mapStateToProps = (state) => {
  return {
    counter: state
  }
}

export default connect(mapStateToProps, actions)(Counter);