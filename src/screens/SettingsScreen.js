import { View, Text } from 'react-native';
import {createStaticNavigation, useNavigation} from '@react-navigation/native';
//import {Button} from '@react-navigation/elements';

function SettingsScreen(){
    const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button onPress={() => navigation.push ('Details')}>
        Go to Details
      </Button>
      <Button onPress={()=> navigation.goBack()}>go Back</Button>
    </View>
  );
}
export default SettingsScreen;