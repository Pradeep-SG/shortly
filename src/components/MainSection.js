import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listActions } from '../store';
import errorMsg from '../functions/errorMsg';

const MainSection = () => {
  const [link, setLink] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [limitExceeded, setLimitExceeded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMsgState, setErrorMsgState] = useState('');

  useEffect(() => {
    dispatch(listActions.fetchData());
  }, []);

  const dispatch = useDispatch();
  let linkList = useSelector((state) => state.linkList);

  const changeHandler = (event) => {
    setIsError(false);
    setLink(event.target.value);
  };

  const clickHandler = async () => {
    if (linkList.length >= 5) {
      setLimitExceeded(true);
      return;
    }

    try {
      setIsLoading(true);
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${link}`
      );
      const data = await response.json();
      if (data.error) {
        setErrorMsgState(errorMsg(data.error_code));
        setIsError(true);
        return;
      }
      const tempObj = {
        originalLink: link,
        shortenLink: data.result.short_link2,
      };
      linkList = [...linkList, tempObj];
      localStorage.setItem('linkList', JSON.stringify(linkList));
      dispatch(listActions.fetchData());
    } catch (err) {
      console.log(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="main-section">
      <div className="main-section-content">
        <div className="main-section-content-text">
          <h1>More than just shorter links</h1>
          <p>
            Build your brand&rsquo;s recognition and get detailed insights on
            how your links are performing.
          </p>
          <a className="get-started" href="#">
            Get Started
          </a>
        </div>
        <div className="main-section-content-svg">
          <img
            src="./images/illustration-working.svg"
            alt="a women working in her pc"
          />
        </div>
      </div>
      <div className="shorten-link-input">
        {!limitExceeded ? (
          <>
            <div className={`shorten-link-input-real ${isError && 'shorten-link-input-error'}`}>
              <input
                type="text"
                placeholder="Shorten a link here..."
                name=""
                value={link}
                onChange={changeHandler}
              />
              <button onClick={clickHandler}>
                {isLoading ? <div className="loader"></div> : 'Shorten It!'}
              </button>
              {isError && <p className="error-msg"><em>{errorMsgState}</em></p>}
            </div>
          </>
        ) : (
          <div className="limit-reached">Free Limit Reached</div>
        )}
      </div>
    </section>
  );
};

export default MainSection;
