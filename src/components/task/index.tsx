import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type TaskProps = {
    title: string;
    completed: boolean;
    onToggleComplete: () => void;
    onDelete: () => void;
}

export function Task({ title, completed, onToggleComplete, onDelete }: TaskProps) {
    return (
        <View style={[styles.taskContainer, completed && styles.completedTaskContainer]}>
            <View style={styles.taskContent}>
                <View>
                    <BouncyCheckbox 
                        size={20}
                        fillColor="#5E60CE"
                        innerIconStyle={{ borderWidth: 0.8 }}
                        onPress={onToggleComplete} 
                        style={{ marginRight: 8 }} 
                    />
                 </View>
                <Text style={[styles.taskText, completed && styles.completedTaskText, { flex: 1 }]}>
                    {title}
                </Text>
            </View>
            <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
                <MaterialIcons name="delete" size={22} color="#808080" />

            </TouchableOpacity>
        </View>
    );
}
