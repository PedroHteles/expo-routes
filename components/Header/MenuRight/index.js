import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Container, Button } from './styles';

// navigation prop
function MenuRight({ navigation }) {
  return (
    <Container>
      {/* Navegar para 'Wallet' */}
      <Button onPress={() => navigation.navigate('Wallet')}>
        <MaterialCommunityIcons
          name="qrcode-scan"
          color="#F01"
          size={25}
        />
      </Button>
    </Container>
  );
};

export default MenuRight;