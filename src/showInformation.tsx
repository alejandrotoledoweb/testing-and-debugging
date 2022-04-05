import { FC, useState, ChangeEvent } from 'react';

const ShowInformation: FC = () => {
  const [info, setInfo] = useState({ name: '', age: 0, show: false });

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInfo({
      ...info,
      [name]: value,
    });
  };

  const handleShowInformation = () => {
    setInfo({
      ...info,
      show: true,
    });
  };

  if (info.show) {
    return (
      <div className="ShowInformation">
        <h1>Personal Information</h1>
        <div className="personalInformation">
          <p>
            <strong>Name:</strong> {info.name}
          </p>
          <p>
            <strong>Age:</strong> {info.age}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="ShowInformation">
      <h1>Personal Information</h1>
      <p>
        <strong>Name:</strong>
      </p>
      <p>
        <label htmlFor="name">label 1</label>
        <input
          name="name"
          type="text"
          value={info.name}
          onChange={handleOnChange}
          placeholder="Name"
        />
      </p>
      <p>
        <label htmlFor="age">label 2</label>
        <input
          name="age"
          type="number"
          value={info.age}
          onChange={handleOnChange}
          placeholder="0"
        />
      </p>
      <p>
        <button onClick={handleShowInformation}>Show Information</button>
      </p>
    </div>
  );
};

export default ShowInformation;
