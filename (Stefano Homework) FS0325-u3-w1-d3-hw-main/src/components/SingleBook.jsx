import { Component } from 'react'
import { Card, Button } from 'react-bootstrap'

// benissimo! però ora se voglio rendere funzionante SingleBook
// devo fornire a OGNI suo utilizzo 2 props: "immagine" e "titolo"

class SingleBook extends Component {
  state = {
    selected: false,
  }

  render() {
    return (
      <Card className={this.state.selected ? 'redborder' : ''}>
        <Card.Img
          variant="top"
          src={this.props.immagine}
          onClick={() => {
            console.log('HO CLICCATO LA COPERTINA!')
            // voglio ora invertire la proprietà "selected" nello state
            this.setState({
              selected: !this.state.selected, // fa un toggle "infinito"
            })
          }}
        />
        <Card.Body>
          <Card.Title>{this.props.titolo}</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            corrupti molestiae quidem corporis tempora autem. A quasi qui iusto,
            possimus delectus iure, ab praesentium suscipit voluptatibus soluta
            numquam, voluptates adipisci?
          </Card.Text>
          <Button variant="primary">Comprami</Button>
        </Card.Body>
      </Card>
    )
  }
}

export default SingleBook
