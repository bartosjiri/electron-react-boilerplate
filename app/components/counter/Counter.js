import React from 'react'
import { connect } from "react-redux"
import { Link } from 'react-router-dom'

import {
  increment,
  incrementIfOdd,
  incrementAsync,
  decrement
} from "../../store/counter/counter.actions"

import counterStyle from "./assets/Counter.module.scss"

const Counter = ({
  counter,
  incrementAction,
  incrementIfOddAction,
  incrementAsyncAction,
  decrementAction
}) => {
  return (
    <div>
      <div className={counterStyle.backButton} data-tid="backButton">
        <Link to="/">
          {"<"}
        </Link>
      </div>
      <div className={`counter ${counterStyle.counter}`} data-tid="counter">
        {counter}
      </div>
      <div className={counterStyle.btnGroup}>
        <button
          className={counterStyle.btn}
          onClick={incrementAction}
          data-tclass="btn"
          type="button"
        >
          +
        </button>
        <button
          className={counterStyle.btn}
          onClick={decrementAction}
          data-tclass="btn"
          type="button"
        >
          -
        </button>
        <button
          className={counterStyle.btn}
          onClick={incrementIfOddAction}
          data-tclass="btn"
          type="button"
        >
          odd
        </button>
        <button
          className={counterStyle.btn}
          onClick={() => incrementAsyncAction()}
          data-tclass="btn"
          type="button"
        >
          async
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  counter: state.counter
})

const mapDispatchToProps = {
  incrementAction: increment,
  incrementIfOddAction: incrementIfOdd,
  incrementAsyncAction: incrementAsync,
  decrementAction: decrement
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
