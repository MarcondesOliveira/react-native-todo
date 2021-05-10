import React, {useState} from 'react';
import {StyleSheet, View, FlatList, ScrollView} from 'react-native';
import Header from './src/components/Header';
import TodoItem from './src/components/TodoItem';
import AddTodo from './src/components/AddTodo';

const App = () => {
  const [todos, setTodos] = useState([
    {text: 'buy cofee', key: '1'},
    {text: 'create an app', key: '2'},
    {text: 'buy food', key: '3'},
  ]);

  const pressHandler = key => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key !== key);
    });
  };

  const submitHandler = text => {
    setTodos(prevTodos => {
      return [{text: text, key: Math.random().toString()}, ...prevTodos];
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({item}) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});

export default App;

223344;
