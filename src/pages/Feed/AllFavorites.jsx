import React from 'react';
import PropTypes from 'prop-types';
import deleteIcon from 'media/delete.svg';
import settingsIcon from 'media/settings.svg';
import { Grid } from '@material-ui/core';
// import { DiscordSVG } from 'commons';
import { css } from 'emotion';
import * as styles from './style';

const AllFavorites = ({ favorites, handleAllFavorites }) => {
  const paddingRight = css`
    padding-right: ${`${favorites.length > 5 ? 3 : 0}px`};
  `;
  return (
    <div className={styles.allLikesModal}>
      <div
        className="backgroundShadow"
        onClick={handleAllFavorites}
        onKeyDown={() => {}}
        role="tab"
        tabIndex={0}
      />
      <div className="modal">
        <div className="modalHeader">
          Interested {favorites.length} people{' '}
          <div
            onClick={handleAllFavorites}
            onKeyDown={() => {}}
            role="tab"
            tabIndex={0}
            className={`${styles.closeIcon} ${paddingRight}`}
          >
            <img src={deleteIcon} alt="close" />
          </div>
        </div>
        <div className={styles.favorite}>
          {favorites.map(favorite => (
            <Grid
              container
              justify="space-between"
              style={{ padding: '10px 25px', border: 'solid 1px #f3f3f3' }}
              alignItems="center"
            >
              <div className={styles.avatarWithInfo}>
                <styles.Avatar bg={favorite.avatar} />
                <div className={styles.favoriteInfo}>
                  <div className={styles.favoriteName}>{favorite.name}</div>
                  <Grid
                    container
                    alignContent="center"
                    style={{ letterSpacing: '0.4px', color: '#969696', marginTop: '5px' }}
                  >
                    <img src={settingsIcon} alt="setting" height={14} width={14} />
                    {favorite.domain}
                  </Grid>
                </div>
              </div>
              <a href="https://discordapp.com/" target="_blanck" className="discordIcon">
                {/* <DiscordSVG /> */}
              </a>
            </Grid>
          ))}
        </div>
      </div>
    </div>
  );
};

AllFavorites.propTypes = {
  favorites: PropTypes.arrayOf(PropTypes.object),
  handleAllFavorites: PropTypes.func
};

AllFavorites.defaultProps = {
  favorites: [],
  handleAllFavorites: () => {}
};

export default AllFavorites;
