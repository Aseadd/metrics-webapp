import React from 'react';
import Card from 'react-bootstrap/Card';

function Home() {
  return (
    <Card className="border-0">
      <Card.Title>Card title</Card.Title>
      <Card.Body>
        Card body
        <Card.Text>Card text</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Home;
