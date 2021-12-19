import {
  DrawerNavigationProp,
  DrawerScreenProps,
} from '@react-navigation/drawer';
import {RouteProp} from '@react-navigation/native';

export type DrawerScreenName = 'HomeContent';

export type DrawerParamList = {
  HomeContent: undefined;
};

// Types used for annotating props passed in scene params
export type HomeContentSceneProps = DrawerScreenProps<
  DrawerParamList,
  'HomeContent'
>;

// Type used for annotating useNavigation hook
export type DrawerNavigationProps = DrawerNavigationProp<DrawerParamList>;

// Type used for annotating useRoute hook
export type HomeContentRouteProps = RouteProp<DrawerParamList, 'HomeContent'>;

export interface DrawerOptionsProps {
  route: RouteProp<DrawerParamList, keyof DrawerParamList>;
  navigation: any;
}
