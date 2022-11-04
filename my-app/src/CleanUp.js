import { useState, useEffect } from 'react';

function Hello() {
  useEffect(() => {
    console.log('created :)');
    return () => console.log('destroyed :(');
  }, []);

  return <h1>Hello</h1>;
}

function CleanUp() {
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing((prev) => !prev);
  };
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? 'hide' : 'showing'}</button>
    </div>
  );
}

export default CleanUp;
