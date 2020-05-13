import React from 'react';
import styled from 'styled-components';
import { Card, Feed } from 'semantic-ui-react';
import type { User } from '../../reducers/TicketReducers'

const Content = styled(Card.Content)`
  &&& {
    padding: 13px;
  }
  .date {
    font-size: 11px !important;
    color: #a1a1a1 !important;
  }
  .summary {
    font-size: 10px !important;
    color: white !important;
    font-weight: 400 !important;
  }
`;

const Avatar = styled(Feed.Label)`
  width: 40px !important;
  height: 40px !important;
`;

interface Props {
  user: User
}

const UserInfo = ({ user }: Props) => {
  const { avatar, firstName, lastName, specialities } = user;
  return (
    <Content>
      <Feed>
        <Feed.Event>
          <Avatar image={avatar} />
          <Feed.Content>
            <Feed.Date content={`${firstName} ${lastName}`} />
            <Feed.Summary>
              {specialities.join(',').toUpperCase()}
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </Content>
  );
};

export default UserInfo;
