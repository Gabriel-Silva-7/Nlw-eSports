import React from 'react';
import { View, Image } from 'react-native';
import logoimg from './../../assets/logo-nlw-esports.png'

import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
        <Image
        source={logoimg}
        style={styles.logo}
        />

    </View>
  );
}