import { useEffect, useState } from 'react';

const Loading = () => {
  const [animate, setAnimate] = useState();
  const [string, setString] = useState('');

  const makeAnimation = () => {
    let isFoward = false;
    const originalStr = 'Loading...'
    let str = 'Loading...';

    const animation = setInterval(() => {
      if (isFoward) {
        if (str.length < originalStr.length) {
          const len = str.length + 1;
          str = originalStr.slice(0, len);
        } else {
          isFoward = false;
        }
      } else {
        if (str.length > 0) {
          const len = str.length - 1;
          str = originalStr.slice(0, len);
        } else {
          isFoward = true;
        }
      }

      setString(str)
    }, 300);

    setAnimate(animation);
  }

  useEffect(() => {
    makeAnimation()

    return () => {
      clearInterval(animate);
    }
  }, [])

  return (
    <div className="login-page">
      <h1 className="hero-title login-title fade-in">{ string }</h1>
    </div>
  );
}

export default Loading;
