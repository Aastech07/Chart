import { StyleSheet, Text, View, } from 'react-native';
import { BarChart} from "react-native-chart-kit";
export default function App() {
  return (
    <View style={{backgroundColor:'#000',flex:1}}>
<View style={{top:200}}>
  <Text style={{textAlign:'center',fontSize:20,fontWeight:'700',color:'#fff'}}>BarChart Chart.</Text>
  <BarChart
    data={{
      labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri","Sat"],
      datasets: [
        {
          data: [
          6,
          9,
          12,
          3,
          6,
          9,
          12,
          3,
          6
          ]
        }
      ]
    }}
    width={350} // from react-native
    height={300}
    
    yAxisSuffix="pm"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      
      backgroundColor: "#fff",
      backgroundGradientFrom: "black",
      backgroundGradientTo: "red",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "5",
        stroke: "#ffa726"
        ,
      }
    }}
    
    style={{
      marginVertical: 8,
      borderRadius: 16,left:5
    }}
  />
</View> 
</View> );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
