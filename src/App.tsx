import * as React from 'react';

import Layout from './components/Layout';
import Services from './components/Services';

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Services />
      </Layout>
    );
  }
}

export default App;
