/**
*
* SettingsSummary
*
*/

import React from 'react';


import styles from './styles.css';

function SettingsSummary({ date, address, onClickButton }) {
  return (
    <div className={styles.container}>
      <span>{date}{date && address ? ' in ' : ''}{address}</span>
      <button className={styles.button} onClick={onClickButton}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="296 386 20 20" enableBackground="new 296 386 20 20"><path fill="#000" d="M316 396.9c-.1.4-.4.8-.9.9-.6.1-1.7.2-1.7.2-.5.1-.9.6-.9 1.1 0 .2.1.4.2.6 0 0 .7.9 1.1 1.4.3.3.3.9 0 1.2-.4.5-.8.9-1.3 1.3-.2.2-.4.2-.6.2s-.4-.1-.6-.2l-1.3-1c-.2-.1-.4-.2-.6-.2-.6 0-1 .4-1.1.9l-.2 1.7c-.1.4-.4.8-.9.9-.3.1-.7.1-1 .1-.3 0-.7 0-.9-.1-.4-.1-.8-.4-.9-.9l-.2-1.7c-.1-.5-.6-.9-1.1-.9-.2 0-.5.1-.7.2l-1.3 1c-.2.2-.4.2-.6.2-.2 0-.4-.1-.6-.2-.5-.4-.9-.8-1.3-1.3-.3-.3-.3-.9 0-1.2l1-1.3c.2-.2.2-.4.2-.7 0-.6-.4-1-.9-1.1l-1.6-.2c-.4-.1-.8-.4-.9-.9-.1-.6-.1-1.3 0-1.9.1-.4.4-.8.9-.9l1.6-.2c.6-.1.9-.6.9-1.1 0-.2-.1-.4-.2-.7l-1-1.3c-.3-.3-.3-.9 0-1.2.4-.5.8-.9 1.3-1.3.3-.3.9-.3 1.2 0l1.3 1c.2.1.4.2.7.2.6 0 1-.4 1.1-.9l.2-1.7c.1-.4.4-.8.9-.9.6-.1 1.3-.1 1.9 0 .4.1.8.4.9.9l.2 1.7c.1.5.6.9 1.1.9.2 0 .4-.1.6-.2 0 0 .9-.7 1.3-1.1.3-.3.9-.3 1.2 0 .5.4.9.8 1.3 1.3.3.3.3.9 0 1.2 0 0-1.1 1.3-1.1 1.4-.1.2-.2.4-.2.6 0 .6.4 1 .9 1.1 0 0 1.2.2 1.7.2.4.1.8.4.9.9v2zm-6.6-.9c0-1.9-1.5-3.4-3.4-3.4s-3.4 1.5-3.4 3.4 1.5 3.4 3.4 3.4 3.4-1.5 3.4-3.4z" /></svg>
      </button>
    </div>
  );
}

SettingsSummary.propTypes = {
  address: React.PropTypes.string,
  date: React.PropTypes.string,
  onClickButton: React.PropTypes.func.isRequired,
};

export default SettingsSummary;
