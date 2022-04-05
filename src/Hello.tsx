import React, { FC } from 'react';

type Props = {
  name: string;
};

const Hello: FC<Props> = ({ name }) => {
  return <h1 className="Hello">Hello {name || 'World'}</h1>;
};

export default Hello;
