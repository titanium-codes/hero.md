import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { yellow } from 'constants/colors';
import * as styles from './style';
import NewPost from './NewPost';

class Main extends React.Component {
  state = { viewAllInfoId: [] };

  handleViewAllInfoId = (id) => {
    const { viewAllInfoId } = this.state;
    if (viewAllInfoId.includes(id)) {
      viewAllInfoId.splice(viewAllInfoId.indexOf(id), 1);
    } else {
      viewAllInfoId.push(id);
    }
    this.setState({ viewAllInfoId });
  };

  handleDetails = (id) => {
    const { handleDetailsForEntity } = this.props;
    handleDetailsForEntity(id);
    this.setState({ viewAllInfoId: [] });
  };

  render() {
    const {
      data, history, wantAnEvent, detailsFor, handleAllFavorites
    } = this.props;

    const { viewAllInfoId } = this.state;

    return (
      <div className={styles.main}>
        <NewPost />
        {data.map(({
 date, title, favorite, favorites, bg, id, type, iWantIt, description
}) => (
  <React.Fragment key={id}>
    <styles.MainContent>
      <styles.Image bg={bg} />
      <div className={styles.mainInfo}>
        <p>{date}</p>
        <styles.MainTitle
          color={detailsFor.includes(id) ? yellow : 'rgba(0, 0, 0, 0.87)'}
          onClick={() => this.handleDetails(id)}
        >
          {title.length > 30 ? `${title.substr(0, 30)} ...` : title}
        </styles.MainTitle>
        {detailsFor.includes(id) && (
        <div className={styles.description}>
          {viewAllInfoId.includes(id) ? (
                      description
                    ) : (
                      <>
                        {description.slice(0, 200)}{' '}
                        <span
                          className={styles.viewAllDescription}
                          onClick={() => this.handleViewAllInfoId(id)}
                          onKeyDown={() => {}}
                          role="tab"
                          tabIndex={0}
                        >
                          ... View all
                        </span>
                      </>
                    )}
        </div>
                )}

        <Grid container alignItems="center" justify="space-between">
          <div className={styles.favoritewithNrOfLikes}>
            <styles.Interested color={favorite ? yellow : 'rgba(0, 0, 0, 0.87)'}>
              {favorites.length} interested
            </styles.Interested>
          </div>
          {detailsFor.includes(id) && favorites.length > 0 && (
          <div>
            <Button
              color="primary"
              className={styles.viewAllFavorites}
              onClick={() => handleAllFavorites(favorites)}
            >
                        view all
            </Button>
          </div>
                  )}
        </Grid>
        {detailsFor.includes(id) && (
        <Grid container justify="flex-end" direction="column">
          <div className={styles.favorites}>
            {favorites.slice(0, 10).map(fr => (
              <styles.Avatar bg={fr.avatar} key={fr.avatar} />
                      ))}
          </div>
        </Grid>
                )}
        {type === 'event' && (
        <Button
          color="primary"
          variant={iWantIt ? 'contained' : 'outlined'}
          className={`${styles.iWantIt} ${!iWantIt ? styles.outlinedIWantIt : ''}`}
          onClick={() => wantAnEvent(id)}
        >
                    I want it
        </Button>
                )}
        {type === 'course' && (
        <Button
          color="primary"
          variant="contained"
          className={styles.iWantIt}
          onClick={() => history.push(`/courses/${id}`)}
        >
                    Apply now
        </Button>
                )}
      </div>
    </styles.MainContent>
  </React.Fragment>
        ))}
      </div>
    );
  }
}

Main.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  favoriteAnEvent: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  wantAnEvent: PropTypes.func.isRequired,
  detailsFor: PropTypes.arrayOf(PropTypes.number).isRequired,
  handleDetailsForEntity: PropTypes.func.isRequired,
  handleAllFavorites: PropTypes.func.isRequired
};

export default Main;
