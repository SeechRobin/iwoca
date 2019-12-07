import * as React from 'react';
import { Container } from 'semantic-ui-react'

const Page = ({ children }) =>( 
    <Container className="page">{children}</Container> 
)
export default Page;