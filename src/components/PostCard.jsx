import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { elapsedTime, truncatedStory } from '../utilities/utils';
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';


export const PostCard = ({id, title, description, photoUrl, timestamp, maxLength}) => {
  const navigate = useNavigate();


  return (
    <>
    <Card style={{ margin: '5px', width: '45%', padding: '5px', backgroundImage: "linear-gradient(to right, #d4e663, #e8f781"}}>
      <Card.Img style={{maxWidth: "200px", flexWrap: 'wrap'}} src={photoUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {truncatedStory(description, maxLength="40")}...
        </Card.Text>
        <Card.Text>{elapsedTime(timestamp)}</Card.Text>
        <Button variant="primary" onClick={() => navigate('details/' + id)}>Tovább</Button>
      </Card.Body>
    </Card>
  </>
  ); 
}