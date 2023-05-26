import React, { useState } from 'react'
import { TextInput, FlatList, View, Text, TouchableOpacity } from 'react-native'

const SearchInput = ({ placeholderInput, suggestionsData, onSelectSuggestion }) => {
  const [searchText, setSearchText] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)

  const handleSearchTextChange = (text) => {
    setSearchText(text)
    setShowSuggestions(text !== '') // Mostra as sugestões se o texto não estiver vazio
  }

  const handleSuggestionPress = (suggestion) => {
    setSearchText(suggestion)
    setShowSuggestions(false)
    if (onSelectSuggestion) {
      onSelectSuggestion(suggestion)
    }
  }

  const filteredSuggestions = suggestionsData.filter(
    (item) => item.toLowerCase().startsWith(searchText.toLowerCase())
  )

  const renderSuggestion = ({ item }) => (
    <TouchableOpacity onPress={() => handleSuggestionPress(item)}>
      <Text>{item}</Text>
    </TouchableOpacity>
  )

  return (
    <View>
      <TextInput
        style={{ borderWidth: 1, padding: 10 }}
        placeholder={placeholderInput}
        value={searchText}
        onChangeText={handleSearchTextChange}
      />

      {showSuggestions && (
        <FlatList
          data={filteredSuggestions}
          renderItem={renderSuggestion}
          keyExtractor={(item) => item}
        />
      )}
    </View>
  )
}

export default SearchInput
