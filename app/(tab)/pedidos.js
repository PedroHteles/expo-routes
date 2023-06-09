import React, { useState, useEffect } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { View} from 'react-native';

import faker from 'faker';

import
  {
    Container,
    Item,
    OrderDetails,
    Order,
    Evaluation,
    Message,
    Star,
    Menu,
    MenuButton,
    MenuText
  } from './stylesPedidos';

  

// Função para gerar uma compra falsa
function generatePurchase() {
  const id = faker.random.uuid();
  const date = faker.date.recent();
  const restaurant_url = faker.image.food();
  const restaurant_name = faker.company.companyName();
  const order_number = faker.random.alphaNumeric(8);
  const order = faker.lorem.sentence();

  return {
    id,
    date,
    restaurant_url,
    restaurant_name,
    order_number,
    order,
  };
}


export default function Purchases() {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    loadPurchases()
  }, []);

  async function loadPurchases() {
    // Obter dados da rota 'purchases' da api fake
    // const response = await api.get('purchases');
    const fakePurchases = Array.from({ length: 15 }, generatePurchase);
    setPurchases(fakePurchases);

    // setPurchases(response.data);
  }

  console.log(purchases)
  purchases?.map(teste =>  console.log(teste.id))

  return (
<Container>
      {/* Mapear compras para cada item */}
      { purchases?.map(item => (
        <Item key={ item.id }> 
   <OrderDetails>
              <Order>{ item.order }</Order>
            </OrderDetails>
            <Evaluation>
              <View style={{flexDirection:`row`,alignItems:`center`}}>
              <Message>Avaliação do pedido</Message>
              <Star>
                <MaterialIcons
                  name="star"
                  color="#FFCD32"
                  size={15}
                />

                <MaterialIcons
                  name="star"
                  color="#FFCD32"
                  size={15}
                />

                <MaterialIcons
                  name="star"
                  color="#FFCD32"
                  size={15}
                />

                <MaterialIcons
                  name="star"
                  color="#FFCD32"
                  size={15}
                />

                <MaterialIcons
                  name="star"
                  color="#FFCD32"
                  size={15}
                />
              </Star>
              </View>

            </Evaluation>
            <Menu>
              <MenuButton>
                <MenuText>AJUDA</MenuText>
              </MenuButton>
              <MenuButton>
                <MenuText>Detalhes</MenuText>
              </MenuButton>
            </Menu>
        </Item>
      ))}
    </Container>
  );
};