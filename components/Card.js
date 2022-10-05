import * as React from 'react';
import { useEffect, useState } from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const MyComponent = (props) => {
    const [title, setTitle] = useState('default title')
    const [paragraph, setParagraph] = useState('default paragraph')
    useEffect(() => {
        console.log('idts ', props)
        if(props.title === 'yo'){
            setTitle('abc')
        }
        else{
            setTitle(props.title)
        }
        setParagraph(props.paragraph)
    }, [])

  return( <Card>
    <Card.Title title= {title} subtitle="Card Subtitle" left={LeftContent} />
    <Card.Content>
      <Title>{title}</Title>
      <Paragraph>{paragraph}</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
  )
};

export default MyComponent;