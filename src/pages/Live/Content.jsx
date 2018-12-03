import React from 'react';
import Navbar from './Navbar';

class Content extends React.Component {
  state = { tab: 0 };

  render() {
    return (
      <div>
        <div>
          <Navbar />
        </div>
      </div>
    );
  }
}
export default Content;
