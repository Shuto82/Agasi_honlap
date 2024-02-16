import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { elapsedTime, truncatedStory } from '../utilities/utils';
import { useNavigate } from 'react-router-dom';


export const PostCard = ({id, title, description, photoUrl, timestamp, maxLength}) => {
  const navigate = useNavigate();


  return (
    <>
    <Card style={{ width: '40%', padding: '5px', backgroundImage: "linear-gradient(to right, #4967E0, #6ED5F3"}}>
      <Card.Img style={{maxWidth: "200px", flexWrap: 'wrap'}} src={photoUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {truncatedStory(description, maxLength)}
        </Card.Text>
        <Card.Text>{elapsedTime(timestamp)}</Card.Text>
        <Button variant="primary" onClick={() => navigate('details/' + id)}>Részletek</Button>
      </Card.Body>
    </Card>
  </>
  ); 
}