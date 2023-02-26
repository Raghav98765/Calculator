import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "black"
},
resultContainer:{
  width: "100%",
  height: "100px",
  marginBottom: "20px",
  justifyContent: "flex-end",
  alignItems: "flex-end",
  padding: "20px",
  backgroundColor: "white"
},
result:{
  fontSize: "48px",
  fontWeight: "bold"
},
buttonRow:{
  flexDirection: "row"
},
button:{
  width: "60px",
  height: "70px",
  margin: "10px",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "white",
  borderRadius: "1px"
},
buttonText:{
  fontSize: "32px",
  color: "blue"
},
operatorButton:{
  backgroundColor: "red"
},
clearButton:{
  backgroundColor: "#e71d36"
}
})

export default styles;