import React from 'react';
import { Grid } from '@material-ui/core';
import * as styles from './style';

class FirstSignUp extends React.Component {
  state = {
    questions: [
      { title: 'WOULD YOU LIKE TO RUN?', answers: ['YES', 'NO'] },
      { title: 'HOW MUCH KM?', answers: ['8KM', '12KM', '24KM', '36KM', '48KM'] }
    ],
    currentQuestion: 0,
    currentKM: '8KM'
  };

  switchQuiestion = (currentQuestion) => {
    this.setState({ currentQuestion });
  };

  render() {
    const { questions, currentQuestion, currentKM } = this.state;
    const { history } = this.props;
    return (
      <div className={styles.container}>
        {currentQuestion === 0 ? (
          <div className={styles.question1}>
            <Grid container justify="center">
              <div className="title">
                WOULD <br /> YOU LIKE TO <br /> RUN?
              </div>
            </Grid>
            <div className={styles.answers}>
              <div
                className="answer"
                onClick={() => this.switchQuiestion(1)}
                onKeyDown={() => {}}
                role="tab"
                tabIndex={0}
              >
                YES
              </div>
              <div
                className="answer"
                onClick={() => this.switchQuiestion(1)}
                onKeyDown={() => {}}
                role="tab"
                tabIndex={0}
              >
                NO
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.question2}>
            <Grid container justify="center">
              <div
                className="prevQuestion title"
                onClick={() => this.switchQuiestion(0)}
                onKeyDown={() => {}}
                role="tab"
                tabIndex={0}
              >
                WOULD <br /> YOU LIKE TO <br /> RUN?
              </div>
            </Grid>
            <Grid container justify="center">
              <div className="title">
                HOW MUCH <br /> KM?
              </div>
            </Grid>
            <Grid container justify="center" className={styles.answers}>
              <div
                className={styles.answerForKM}
                onClick={() => this.switchQuiestion(1)}
                onKeyDown={() => {}}
                role="tab"
                tabIndex={0}
              >
                {questions[1].answers.map(el => (
                  <div
                    key={el}
                    className={`${currentKM === el ? styles.selectedKM : styles.restKM}`}
                    onClick={() => {
                      localStorage.removeItem('firstSignUp');
                      history.go('/feed');
                    }}
                    onKeyDown={() => {}}
                    role="tab"
                    tabIndex={0}
                  >
                    {el}
                  </div>
                ))}
              </div>
            </Grid>
          </div>
        )}
      </div>
    );
  }
}

export default FirstSignUp;
