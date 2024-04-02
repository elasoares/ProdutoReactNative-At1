import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const BackNavigation = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.fab}
      onPress={() => navigation.goBack()}
    >
      <Ionicons name="arrow-back" size={24} color="white" />
    </TouchableOpacity>
  );
};

export default BackNavigation;

const styles = StyleSheet.create({
    fab: {
      position: 'absolute',
      margin: 16,
      marginVertical: 10,
      right: 0,
      bottom: 0,
      backgroundColor: '#6200ee',
      padding: 7,
      borderRadius: 30,
      elevation: 4,
    },
  });