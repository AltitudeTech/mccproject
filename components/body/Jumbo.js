import React from 'react';
import { Jumbotron } from 'reactstrap'
import Button from '@material-ui/core/Button';

const Jumbo = (props) => {
  return (
      <Jumbotron>
        <h1 className="display-3">Hello, world!</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Button variant="raised" color="primary">
            Primary
        </Button>
        </p>
      </Jumbotron>
  );
};

export default Jumbo;