
import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import accontlog from './src/screens/accountlog';
import DeliveryTask from './src/screens/DeliveryTask';
import deliveryTaskbank from './src/screens/deliveryTaskbank';

const RootStack = createNativeStackNavigator({
  screens: {
  accontlog:accontlog,
  DeliveryTask:DeliveryTask,
  deliveryTaskbank:deliveryTaskbank,

  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
