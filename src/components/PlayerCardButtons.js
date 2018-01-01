import React from 'react';

import { Button, Card, Icon, Label } from 'semantic-ui-react';

const PlayerCardButtons = ({ player, upVotePlayer }) => {
  const ButtonColor = player.team.conference === "Western" ? "red" : "blue";

  return (
    <Card.Content extra>
      <Button as="div" labelPosition="right" floated="left" size="tiny" onClick={() => upVotePlayer(player.id, player.votes + 1)}>
        <Button basic color={ButtonColor} size="tiny" compact>
          Vote
        </Button>
        <Label as="a" color={ButtonColor} pointing="left">
          {player.votes}
        </Label>
      </Button>

      <Button.Group icon basic compact floated="right" size="mini">
        <Button icon>
          <Icon name="edit" />
        </Button>
        <Button icon>
          <Icon name="delete" />
        </Button>  
      </Button.Group>
    </Card.Content>  
  );  
};

export default PlayerCardButtons;