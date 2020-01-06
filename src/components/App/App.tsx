import * as React from 'react';

interface IAppProps {
  name: string,
}

const App: React.FunctionComponent<IAppProps> = (props: IAppProps) => {
  return (
    <div>{props.name}</div>
  );
};

export default App;
