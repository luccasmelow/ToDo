import { StatusBar } from 'expo-status-bar';
import { FlatList, Text, View, TextInput, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { Task } from '../../components/task';
import { useState } from 'react';
import { COLOR } from '../../styles/color';
import { styles } from './styles'
import Entypo from '@expo/vector-icons/Entypo';

type taskDTO = {
  title: string,
  completed: boolean;
}



export function TodoList() {
  const [tasks, setTasks] = useState<taskDTO[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  function handleAddTask() {
    if (newTaskTitle.trim()) {
      const newTask = {
        title: newTaskTitle,
        completed: false,
      };
      setTasks(prevTasks => [...prevTasks, newTask]);
      setNewTaskTitle('');
    }
  }

  function handleDeleteTask(index: number) {
    setTasks(prevTasks => prevTasks.filter((_, i) => i !== index));
  }

  function handleCompletedTask(index: number) {
    setTasks(prevTasks => prevTasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    ));
  }

  return (
    <View style={styles.container}>
      <StatusBar style='light' />

      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require('../../../assets/Logo.png')}
        />
      </View>

      <View style={styles.content}>

        <View style={styles.containerInput}>
          <TextInput
            style={styles.input}
            onChangeText={setNewTaskTitle}
            value={newTaskTitle}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={COLOR.GRAY_300}
          />
          <TouchableOpacity onPress={handleAddTask} style={styles.button}>
            <Entypo name="plus" size={24} color="white" />
          </TouchableOpacity>
          
        </View>
        
        


          <View style={styles.info}>
            <View style={styles.concluidos}>
              <Text style={styles.criadoText}>
                Criadas: 
              </Text>
              <View style={styles.counter}>
                <Text style={{color: 'white'}}>
                 {tasks.length} 
                </Text>
              </View>
            </View>

          <View style={styles.concluidos}>
            <Text style={styles.concluidosText}>
              Concluídas: 
            </Text>
            <View style={styles.counter}>
              <Text style={{color: 'white'}}>
                {tasks.filter(task => task.completed).length}
              </Text>
            </View>
          </View>

        </View>
        <View style={styles.list}>
          <FlatList
            data={tasks}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item, index }) => (
              <Task 
                title={item.title}
                completed={item.completed} 
                onDelete={() => handleDeleteTask(index)} 
                onToggleComplete={() => handleCompletedTask(index)} 
              /> 
            )}
            showsVerticalScrollIndicator={false}

            ListEmptyComponent={
              <View style={{alignContent: 'center', alignItems: 'center', gap: 16, marginTop: 60,}}>
                <Entypo name="book" size={52} color="#808080" />

                <Text style={{fontSize: 16, fontWeight: 500, textAlign: 'center', color: '#808080' }}>
                  Você ainda não tem tarefas cadastradas
                  Crie tarefas e organize seus itens a fazer
                </Text>

              </View>
            }
          />
        </View>

      </View>


    </View>
  );
}

