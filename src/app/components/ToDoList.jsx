import React from 'react';
import {
  Row, Col, Container, Form, Button,
} from 'react-bootstrap';
// import { connect } from 'react-redux';
// import { addTodo } from './store/Actions';

const AddTodo = () => (
  <>
    <Container className="shadow-lg bg-white">
      <Row>
        <Col>
          <Form>
            <Form.Group controlId="formBasicToDo">
              <Form.Control className="py-3" type="text" placeholder="" />
              <Button className="mt-3" block type="submit">Add ToDo</Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          List...
        </Col>
      </Row>
    </Container>
  </>
);

export default AddTodo;
