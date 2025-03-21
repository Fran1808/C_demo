import { View, Text } from 'react-native';
import {createStaticNavigation, useNavigation} from '@react-navigation/native';
import {Button} from '@react-navigation/elements';

function DetailsScreen(){
    const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.navigate ('Details')}>
        Go to Details...again
      </Button>
      <Button onPress={()=> navigation.goBack()}>go Back</Button>
      <Button onPress={()=> navigation.popTo('Home')}>go to Home</Button>
      <Button onPress={()=> navigation.popToTop()}>go to first Screen</Button>
    </View>
  );
}
export default DetailsScreen;
