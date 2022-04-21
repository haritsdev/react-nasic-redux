import { useSelector, useDispatch } from 'react-redux';
import { changeUsersName } from './redux/actions/changeUserName';
import { changeUsersAge } from './redux/actions/changeUserAge';
import './App.css';
import { useState } from 'react';
import { changeChecked } from './redux/actions/changeChecked';
import Display from './components/Display';
import RadioButton from './components/RadioButton';
import SelectOption from './components/SelectOption';

function App() {
  const user = useSelector((state) => state.userReducer);
  const isChecked = useSelector((state) => state.checkedReducer);
  const dispatch = useDispatch();

  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);
  const [checked, setChecked] = useState(isChecked.value);
  const [buah, setBuah] = useState('apple');

  const [favorite, setFavorite] = useState('dog');

  const options = [
    {
      label: 'Apple',
      value: 'apple',
    },
    {
      label: 'Mango',
      value: 'mango',
    },
    {
      label: 'Banana',
      value: 'banana',
    },
    {
      label: 'Pineapple',
      value: 'pineapple',
    },
  ];

  const changeOption = (e) => {
    setBuah(e.target.value);
  };

  const handleCatChange = () => {
    setFavorite('cat');
  };

  const handleDogChange = () => {
    setFavorite('dog');
  };

  return (
    <div className="App">
      <h1>Name: {user.name}</h1>
      <h1>Age: {user.age}</h1>
      <h1>
        is checked <pre>{JSON.stringify(checked, null, 4)} </pre>
      </h1>
      <hr></hr>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(changeUsersName(name));
          dispatch(changeUsersAge(age));
          dispatch(changeChecked(checked));
        }}
      >
        <input
          onChange={(e) => setName(e.target.value)}
          placeholder="Change name"
        ></input>
        <br />
        <input
          onChange={(e) => setAge(e.target.value)}
          placeholder="Change age"
        ></input>
        <br />
        <div>
          <RadioButton
            label="Cat"
            value={favorite === 'cat'}
            onChange={handleCatChange}
          />
          <RadioButton
            label="Dog"
            value={favorite === 'dog'}
            onChange={handleDogChange}
          />
          <br />
        </div>
        <SelectOption
          options={options}
          changeOption={changeOption}
          buah={buah}
        />
        <br />
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <br />
        <input type="submit" value="Change user details" />

        <pre>{JSON.stringify(favorite, null, 4)}</pre>
        <pre>{JSON.stringify(buah, null, 4)}</pre>
      </form>
      <Display />
    </div>
  );
}

export default App;
