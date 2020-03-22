import React from 'react';
import {
  Row, Col, Container, Form, Button,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

class AddTodo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      todoItem: 'MPAANI50',
    };
  }

handleChange = (e) => {
  this.setState({
    todoItem: e.target.value,
  });
}

handleAdd = () => {
  const { todoItem } = this.state;
  const { addTodo } = this.props;
  addTodo(todoItem);
  this.setState({ todoItem: '' });
};

render() {
  const { todoItem } = this.state;
  const { add } = this.props;
  return (
    <>
      {/* {console.log(todoItem)} */}
      <Container className="shadow-lg bg-white">
        <Row>
          <Col>
            <Form>
              <Form.Group controlId="formBasicToDo">
                <Form.Control value={todoItem} onChange={this.handleChange} className="py-3" type="text" placeholder="" />
                <span><Button onClick={this.handleAdd} className="mt-3" block>Add ToDo</Button></span>
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            {add}
          </Col>
        </Row>
      </Container>
    </>
  );
}
}

AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired,
  add: PropTypes.string.isRequired,
};


// const mapStateToProps = (state) => ({
//   add: state.add,
// });

// export default connect(mapStateToProps)(AddTodo);
export default AddTodo;
