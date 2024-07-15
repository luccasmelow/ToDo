import { StyleSheet } from 'react-native';
import { COLOR } from '../../styles/color';

const FONT_SIZE = 14;
const PADDING = 12;
const BORDER_RADIUS = 8;
const MARGIN_BOTTOM = 16;

export const styles = StyleSheet.create({
    taskContainer: {
        padding: PADDING,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: COLOR.GRAY_500,
        borderWidth: 1,
        borderRadius: BORDER_RADIUS,
        borderColor: COLOR.GRAY_400,
        marginBottom: MARGIN_BOTTOM,
    },
    taskContent: {
        flexDirection: 'row',
        alignItems: 'center', 
    },
    taskText: {
        fontSize: FONT_SIZE,
        textAlign: 'left',
        color: COLOR.GRAY_100,
        maxWidth: 200,
    },
    completedTaskText: {
        textDecorationLine: 'line-through',
        color: COLOR.GRAY_300,
    },
    completedTaskContainer: {
        borderColor: COLOR.GRAY_400,
        backgroundColor: COLOR.GRAY_400,

    },
    deleteButton: {
        padding: 10,
    },
    deleteText: {
        color: 'red',
    },
});
