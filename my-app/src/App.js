import Button from './Button';
import styles from './App.module.css';
import { useState, useEffect } from 'react';

// useEffect 처음 render할때만 실행하과싶은 것
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState('');
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log('i run all the time');
  useEffect(() => {
    console.log('only once');
  }, []);

  //keyword가 바뀔때만 실행
  useEffect(() => {
    if (keyword !== '') console.log('search for', keyword);
  }, [keyword]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type='text'
        placeholder='Search here'
      />
      <span className={styles.title}>{counter}</span>
      <Button text={'hi'} onclick={onClick} />
    </div>
  );
}

export default App;
