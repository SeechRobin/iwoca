import * as React from 'react';

import PageTemplate from '../../components/PageTemplate/PageTemplate';

const WithLayout = ({ children}) => (
  <PageTemplate>
    {children}
  </PageTemplate>
);

export default WithLayout;
