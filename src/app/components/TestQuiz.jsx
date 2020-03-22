import React, { Component } from 'react';
import {
  Container, Row, Col, Button,
} from 'react-bootstrap';

const imageUrl = 'https://www.trickscity.com/wp-content/uploads/2017/05/whatsapp-dare-games-messages-questions.jpg';

class TestQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizes: [
        {
          id: 1,
          qus: 'What is your favourite ?',
          ans: 1,
          options: [
            {
              Number: 1,
              option: 'Dog',
              url: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/dog_barking_other/1800x1200_dog_barking_other.jpg?resize=600px:*',
            },
            {
              Number: 2,
              option: 'Cat',
              url: 'https://cdn.pixabay.com/photo/2014/11/30/14/11/kitty-551554__340.jpg',
            },
            {
              Number: 3,
              option: 'Cat',
              url: 'https://cdn.pixabay.com/photo/2014/11/30/14/11/kitty-551554__340.jpg',
            },
            {
              Number: 4,
              option: 'Cat',
              url: 'https://cdn.pixabay.com/photo/2014/11/30/14/11/kitty-551554__340.jpg',
            },
          ],
        },
        {
          id: 1,
          qus: 'Which is your favourite Pet',
          ans: 2,
          options: [
            {
              Number: 1,
              option: 'Dog',
              url: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/dog_barking_other/1800x1200_dog_barking_other.jpg?resize=600px:*',
            },
            {
              Number: 2,
              option: 'Cat',
              url: 'https://cdn.pixabay.com/photo/2014/11/30/14/11/kitty-551554__340.jpg',
            },
            {
              Number: 3,
              option: 'Cat',
              url: 'https://cdn.pixabay.com/photo/2014/11/30/14/11/kitty-551554__340.jpg',
            },
            {
              Number: 4,
              option: 'Cat',
              url: 'https://cdn.pixabay.com/photo/2014/11/30/14/11/kitty-551554__340.jpg',
            },
          ],
        },
      ],
      quizCount: 0,
      submitedAns: [],
    };
  }

  handleSubmitAns = (opt) => {
    const { submitedAns: newSubmitedAns } = this.state;
    newSubmitedAns.push(opt);
    this.setState({
      submitedAns: newSubmitedAns,
    }, () => {
      setTimeout(() => {
        const { quizCount } = this.state;
        this.setState({
          quizCount: quizCount + 1,
        });
      }, 500);
    });
  }

  render() {
    const { quizes, quizCount } = this.state;
    return (
      <Container fluid>
        <Row>
          <Col xs={12} className="text-center py-3">
            <img alt="friend-quiz" width="100%" height="100px" src={imageUrl} />
          </Col>
          <Col xs={12} className="text-center pt-3">
            <h3 className="m-0">Dare Quiz</h3>
          </Col>
          <Col xs={12} className="text-center pt-3">
            <Button variant="danger px-3">Skip This Quistion</Button>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="text-center text-success pt-3">
            <b>
              Question No. -&nbsp;
              {quizCount + 1}
            </b>
          </Col>
          <Col xs={12} className="text-center pt-2">
            <b>{quizes[quizCount].qus}</b>
          </Col>
          {quizes[quizCount].options.map((opt) => (
            <Col xs={6} className="text-center pt-3">
              <Button variant="outline-secondary" onClick={() => this.handleSubmitAns(opt)}>
                <span>
                  <img alt="" src={opt.url} width="60px" height="60px" />
                </span>
                <div><b>{opt.option}</b></div>
              </Button>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default TestQuiz;
