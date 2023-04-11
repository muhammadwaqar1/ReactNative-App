import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'black',
  },
  image: {
    width: 180,
    height: 220,

    // borderTopLeftRadius:10,
    // borderTopRightRadius:10,
    
    
  },
  container: {
    flexDirection: 'column',
  },
  imageIcon: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
  Icon:{
    flexDirection:"row",
    alignItems:"center",
    backgroundColor:"#e0e0e0",
    justifyContent:"center",
    paddingVertical:10,
    marginVertical:20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  card:{
    borderWidth:1,
    borderStyle:"solid",
    borderColor: '#e0e0e0',
    width:180,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    
  },
  cardData:{
    flexDirection:'row',
    marginBottom:20,
    justifyContent:'space-around',
    
  },
  cardText:{
    fontSize:16,
    color:'black',
    textAlign:'center',
    paddingVertical:"5%"
  },
  imagee:{
    height: 150,
    opacity: 0.3,
  },
  container: {
    flex: 1,
  },
  images: {
    flex: 1,
    opacity: 0.7,
    justifyContent: 'center',
  },
  textt: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
    // opacity: 0.6,
  },
});
export default styles;
