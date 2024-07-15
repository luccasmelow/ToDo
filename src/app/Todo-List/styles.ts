import { StyleSheet} from 'react-native';
import { COLOR } from '../../styles/color'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        
      },
      header:{
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: COLOR.GRAY_700,
        height: '25%',

      },
      logo:{
        resizeMode: 'contain'        
      },
      content:{
        height: '75%',
        backgroundColor: COLOR.GRAY_600,
        width: '100%',

      },
      containerInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        marginTop: -35,
      },
      info:{
        flexDirection: 'row',
        paddingHorizontal: 24,
        justifyContent: 'space-between',
      },
      criados:{
        fontSize: 16,
        fontWeight: '600',
        color: COLOR.BLUE,
      },
      
      concluidos:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 8,
      },
      concluidosText:{
        fontSize: 16,
        fontWeight: '600',
        color: COLOR.PURPLE,
      },
      criadoText:{
        fontSize: 16,
        fontWeight: '600',
        color: COLOR.BLUE,
      },


      counter:{
        backgroundColor: COLOR.GRAY_400,
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 40,
      },

      input: {
        padding: 20,
        borderRadius: 6,
        backgroundColor: COLOR.GRAY_500,
        borderColor: COLOR.GRAY_700,
        borderWidth: 0.2,
        paddingHorizontal: 10,
        width: '70%',
        color: COLOR.GRAY_100,
        marginRight: 10,
      },
      stats: {
        marginBottom: 20,
        alignItems: 'center',
      },
      list: {
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 24,
      },
      button:{
        backgroundColor: COLOR.BLUE_DARK,
        padding: 16,
        borderRadius: 6
      }
});
