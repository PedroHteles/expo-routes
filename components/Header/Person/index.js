import React, { useState, useEffect } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import
  {
    Container,
    Avatar,
    Info,
    Name,
    Message,
    ProfileButton
  } from './styles';

function Person() {
  const [profile, setProfile] = useState({name:"PEDRO"});

  // useEffect(() => {
  //   async function loadProfile() {
  //     // Obter dados da rota 'profile' da api fake
  //     const response = await api.get('profile');
  //     setProfile(response.data);
  //   }
  //   loadProfile();
  // }, []);

  return (
    <Container>
      <ProfileButton>
        <Avatar source={{ uri: profile.avatar_url }} />
        <Info>
          <Name>{ profile.name }</Name>
          <Message>Editar perfil</Message>
        </Info>

        <MaterialIcons
          name="keyboard-arrow-right"
          size={20}
          color="#999" />
      </ProfileButton>
    </Container>
  );
};

export default Person;