import React from 'react';
import { Grid, Select, MenuItem, FormControl, InputLabel, Input, Button } from '@material-ui/core';

import * as styles from './styles';

class ProfessionalInfo extends React.Component {
  state = {
    skills: [...new Array(3)].map((el, i) => ({
      id: i,
      category: `Skill ${i + 1}`,
      description: 'good skill'
    })),
    handleAddOneMore: false,
    categories: ['Running', 'Swimming'],
    category: '',
    description: ''
  };

  handleData = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  toggleAddOneMore = () => {
    this.setState({ handleAddOneMore: !this.state.handleAddOneMore });
  };

  addOneMore = () => {
    const { skills, category, description } = this.state;
    skills.push({ category, description });
    this.setState({
      skills,
      handleAddOneMore: false,
      category: '',
      description: ''
    });
  };

  hoverSkill = (event) => {
    const { target } = event;
    target.innerHTML = 'DELETE';
  };

  leaveSkill = (event) => {
    const { target } = event;
    target.innerHTML = target.getAttribute('name');
  };

  render() {
    const {
      skills, handleAddOneMore, categories, category, description
    } = this.state;
    return (
      <Grid container className={styles.professionalInfo}>
        <div className="title">Professional Info</div>
        <Grid item xs={12} sm={12} md={12}>
          <Grid container>
            {skills.map(el => (
              <div
                className="category"
                onMouseOver={this.hoverSkill}
                onMouseLeave={this.leaveSkill}
                onFocus={() => {}}
                name={el.category}
              >
                {el.category}
              </div>
            ))}
            <div
              className="addMore"
              onClick={this.toggleAddOneMore}
              onKeyDown={() => {}}
              role="tab"
              tabIndex={0}
            >
              Add one more
            </div>
          </Grid>
        </Grid>
        {handleAddOneMore && (
          <Grid container direction="column">
            <FormControl fullWidth style={{ marginTop: '15px', maxWidth: '300px' }}>
              <InputLabel>Category</InputLabel>
              <Select onChange={this.handleData} value={category} name="category">
                {categories.map(el => (
                  <MenuItem key={el} value={el}>
                    {el}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth style={{ marginTop: '15px', maxWidth: '300px' }}>
              <InputLabel>Short description about your skill</InputLabel>
              <Input
                onChange={this.handleData}
                fullWidth
                name="description"
                value={description}
                style={{ maxWidth: '300px', marginBottom: '15px' }}
              />
            </FormControl>

            <div>
              <Button variant="outlined" style={{ marginRight: '15px' }} className="cancel">
                Cancel
              </Button>
              <Button variant="outlined" onClick={this.addOneMore} className="submit">
                Submint
              </Button>
            </div>
          </Grid>
        )}
      </Grid>
    );
  }
}

export default ProfessionalInfo;
