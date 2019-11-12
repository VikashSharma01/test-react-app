import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

class SimpleCounter extends React.PureComponent {
    handleInc = () => {
      const { dispatch } = this.props;
      dispatch({
        type: 'INC',
      });
    }

    handleDec = () => {
      const { dispatch } = this.props;
      dispatch({
        type: 'DEC',
      });
    }

    render() {
      const { count } = this.props;
      return (
        <>
          {/* {console.log(count)} */}
          <Button onClick={this.handleDec} variant="outline-dark">-</Button>
          <p className="m-0 p-3">{count}</p>
          <Button onClick={this.handleInc} variant="outline-success">+</Button>
        </>
      );
    }
}

const mapStateToProps = (state) => ({
  count: state.count,
});

SimpleCounter.propTypes = {
  dispatch: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(SimpleCounter);
