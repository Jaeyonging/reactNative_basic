import { StyleSheet } from "react-native";
import {MD2Colors as Colors} from 'react-native-paper'

export const styles = StyleSheet.create({
    view: {flexDirection:'row', backgroundColor: Colors.lime100, padding:5},
    leftView:{padding:5},
    rightView:{flex:1, padding:5, marginRight:10},
    avatar: {borderColor: Colors.blue500, borderWidth: 2},
    nameEmailView:{flexDirection:'row', alignItems:'center'},
    name: {marginRight: 5, fontSize: 22, fontWeight:'500'},
    email:{textDecorationLine: 'underline', color: Colors.blue500, textDecorationColor: Colors.blue500},
    dateView:{flexDirection:'row', justifyContent:'space-between', padding: 3, marginTop:5},
    createdDate:{},
    text: {fontSize:16},
    image: {height: 150, marginTop:15},
    countsView:{ flexDirection: 'row', padding: 3, justifyContent: 'space-around'},
    counts:{},
    comments:{marginTop:10, fontSize:16},
    touchableIcon: {flexDirection:'row', padding:5, alignItems:'center'},
    iconText : {color:Colors.deepPurple500, marginLeft:3}
})