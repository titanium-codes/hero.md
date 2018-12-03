import React from 'react';
import { FormControl, InputLabel, Input, Grid, Select, MenuItem, Button } from '@material-ui/core';
import * as styles from './style';

class ApplyForMentor extends React.Component {
  state = {
    isFormVisible: false,
    categories: ['Running', 'Swimming'],
    link: '',
    category: '',
    description: ''
  };

  toggleForm = () => {
    this.setState({ isFormVisible: !this.state.isFormVisible });
  };

  handleData = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const {
      isFormVisible, link, category, categories, description
    } = this.state;
    return (
      <div className={styles.applyForMentor}>
        <styles.Avatar bg="https://s3.eu-west-3.amazonaws.com/be-hero/person-1.png" />
        {isFormVisible ? (
          <Grid container className="form" direction="column">
            <FormControl fullWidth>
              <InputLabel>Link</InputLabel>
              <Input onChange={this.handleData} fullWidth name="link" value={link} />
            </FormControl>
            <FormControl fullWidth style={{ marginTop: '5px', maxWidth: '300px' }}>
              <InputLabel>Category</InputLabel>
              <Select onChange={this.handleData} value={category} name="category">
                {categories.map(el => (
                  <MenuItem key={el} value={el}>
                    {el}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth style={{ marginTop: '5px' }}>
              <InputLabel>Short Description</InputLabel>
              <Input onChange={this.handleData} fullWidth name="description" value={description} />
            </FormControl>
            <Grid container justify="flex-end" style={{ marginTop: '15px' }}>
              <Button variant="outlined" className="cancel" onClick={this.toggleForm}>
                Cancel
              </Button>
              <Button variant="contained" className="send" onClick={this.toggleForm}>
                Send
              </Button>
            </Grid>
          </Grid>
        ) : (
          <div
            className="question"
            onClick={this.toggleForm}
            onKeyDown={() => {}}
            role="tab"
            tabIndex={0}
          >
            John Doe, would you like to share with our community an article or an event?
          </div>
        )}
      </div>
    );
  }
}

export default ApplyForMentor;
