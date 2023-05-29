import React, { useState } from 'react'
import { View, TextInput, Button, Text, ScrollView } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { api } from '../../services/index'
import SearchInput from '../../components/SearchInputSuggestions'

export default function Home() {
  const [nome, setNome] = useState("")
  const [quantidade, setQuantidade] = useState("")
  const [preferenciaMarca, setPreferenciaMarca] = useState("")
  const [unidadeMedia, setUnidadeMedia] = useState("")
  const [items, setItems] = useState([])
  const [categorias, setCategorias] = useState([])
  const [produtos, setProdutos] = useState([])
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("")

  const suggestions = produtos.map(item => item.nome)


  React.useEffect(() => {
    buscaCategorias()
  }, [])

  React.useEffect(() => {
    buscaProdutos()
  }, [categoriaSelecionada])

  const buscaCategorias = async () => {
    const res = await api.get("/categoria")
    setCategorias(res.data)
  }
  
  const buscaProdutos = async () => {
    console.log(`/produto/categoria/${categoriaSelecionada.id}`)
    const res = await api.get(`/produto/categoria/${categoriaSelecionada.id}`)
    setProdutos(res.data)
  }


  const buscaOrçamento = async () => {
    const res = await api.get("/produto/orcamento",items)
    console.log(res.data)
  }

  const handleSelectSuggestion = (suggestion) => {
    setNome(suggestion)
    console.log('Sugestão selecionada:', suggestion)
    // Faça o que quiser com a sugestão selecionada
  }


  const addItem = () => {
    setItems([
      ...items,
      {
        nome: nome,
        quantidade: quantidade,
        preferenciaMarca: preferenciaMarca,
        unidadeMedia: unidadeMedia,
        categoria: categoriaSelecionada.id,
      },
    ])
    setNome("")
    setQuantidade("")
    setPreferenciaMarca("")
    setUnidadeMedia("")
    setCategoriaSelecionada("")
  }

  return (
    <ScrollView >
      <Picker
        placeholder='Selecione a categoria do produto'
        selectedValue={categoriaSelecionada}
        onValueChange={(itemValue) => setCategoriaSelecionada(itemValue)}
        >
        {categorias.map((categoria) => (
          <Picker.Item key={categoria.id} label={categoria.nome} value={categoria} />
        ))}
      </Picker>
      <SearchInput placeholderInput="Infome o nome do produto" suggestionsData={suggestions} onSelectSuggestion={handleSelectSuggestion} />
      <TextInput
           style={{ borderWidth: 1, padding: 10 }}
        placeholder="Quantidade"
        value={quantidade}
        onChangeText={setQuantidade}
      />
      <TextInput
           style={{ borderWidth: 1, padding: 10 }}
        placeholder="Preferência de Marca"
        value={preferenciaMarca}
        onChangeText={setPreferenciaMarca}
      />

      <Picker
        selectedValue={unidadeMedia}
        onValueChange={(itemValue) => setUnidadeMedia(itemValue)}
      >
        <Picker.Item label="KG" value="KG" />
        <Picker.Item label="M" value="M" />
      </Picker>
      <Button title="Adicionar item" onPress={addItem} />
      <ScrollView>
        {items.map((item, index) => (
          <View key={index}>
            <Text>Nome: {item.nome}</Text>
            <Text>Quantidade: {item.quantidade}</Text>
            <Text>Preferência de Marca: {item.preferenciaMarca}</Text>
            <Text>Categoria: {item.categoria}</Text>
            <Text>Unidade de Medida: {item.unidadeMedia}</Text>
          </View>
        ))}
      </ScrollView>
      <Button title="Pesquisar" onPress={buscaOrçamento} />

    </ScrollView>
  )
}
