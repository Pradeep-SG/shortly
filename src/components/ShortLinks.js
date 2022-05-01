import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ShortLinks = ({ originalLink, shortenLink }) => {
  const [isStart, setIsStart] = useState(true);

  const clickHandler = () => {
    setIsStart(false);
  };

  return (
    <div className="short-link-list">
      <p className="main-link">{originalLink}</p>
      <p className="short-link">{shortenLink}</p>
      <CopyToClipboard text={shortenLink} onCopy={clickHandler}>
        <button className={`copy-button ${!isStart && `copied-button`}`}>
          {isStart ? `Copy` : `Copied`}
        </button>
      </CopyToClipboard>
    </div>
  );
};

export default ShortLinks;
