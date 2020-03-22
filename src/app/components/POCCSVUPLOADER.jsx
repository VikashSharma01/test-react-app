import React, { Component } from 'react';
import {
  Container, Row, Col, Button, Table,
} from 'react-bootstrap';
import Papa from 'papaparse';
import './Calculator.scss';

const RenderRow = (props) => props.keys.map(
  (key) => <td key={props.data[key]}>{props.data[key]}</td>,
);

class POCCSVUPLOADER extends Component {
  constructor(props) {
    super(props);
    this.state = {
      csvfile: undefined,
      finalJson: [],
    };
  }

  handleUploadFile = (event) => {
    this.setState({
      csvfile: event.target.files[0],
    });
    // const file = event.target.files[0];
    // const reader = new FileReader();
    // reader.readAsText(file);
    // reader.onload = function (e) {
    //   const csv = e.target.result;
    //   console.log(csv);
    // };
  }

  importCSV = () => {
    const { csvfile } = this.state;
    Papa.parse(csvfile, {
      complete: this.updateData,
      header: true,
    });
  };

  updateData = (result) => {
    const { data } = result;
    // console.log(data);
    this.setState({
      finalJson: data,
    });
  }

  getKeys = (data) => Object.keys(data[0])

  getHeader = (data) => {
    if (data.length === 0) {
      return <th>File has no data</th>;
    }
    const keys = this.getKeys(data);
    // console.log(keys);
    return keys.map((key) => <th key={key}>{key.toUpperCase()}</th>);
  }

  getRowsData = (data) => {
    if (data.length === 0) {
      return <tr>File has no data</tr>;
    }
    const keys = this.getKeys(data);
    return data.map((row) => (
      <tr>
        {/* {console.log(row)} */}
        <RenderRow data={row} keys={keys} />
      </tr>
    ));
  }

  render() {
    const { csvfile, finalJson } = this.state;
    return (
      <Container fluid className="my-3">
        <Row className="border-bottom py-3">
          <Col>
            <input
              type="file"
              name="file"
              accept=".csv"
              onChange={this.handleUploadFile}
            />
          </Col>
          <Col>
            <Button
              type="button"
              variant="outline-success"
              onClick={this.importCSV}
              disabled={!csvfile}
            >
              Parse CSV
            </Button>
          </Col>
        </Row>
        <Row>
          {(finalJson.length > 0)
          && (
          <Col xs={24} className="table">
            <Table striped bordered hover>
              <thead>
                <tr>{this.getHeader(finalJson)}</tr>
              </thead>
              <tbody>
                {this.getRowsData(finalJson)}
              </tbody>
            </Table>
          </Col>
          )}
        </Row>
      </Container>
    );
  }
}

export default POCCSVUPLOADER;
