import React, { Component } from 'react';
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

export default class HeaderApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Header>
        <Left>
        </Left>
        <Body>
            <Title>
                { this.props.title }
            </Title>
        </Body>
        <Right>
            <Button transparent>
                <Icon name='menu' size={25} color={'black'} />
            </Button>
        </Right>                                                   
      </Header>
    );
  }
}
