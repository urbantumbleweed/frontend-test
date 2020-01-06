import * as React from 'react';

export interface IAppProps {
  name: string,
}

const App: React.FunctionComponent<IAppProps> = (props: IAppProps) => {
  return (
    <div>{props.name}</div>
  );
};

export default App;
