// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;

import styles from './source/styles';

import {useState} from 'react';
import React from 'react';
import {Image, ImageBackground, Text, TextInput, View} from 'react-native';

const App = () => {
  const [text, setText] = useState('');
  const [number, setNumber] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.text}>First ReactNative App</Text>
      <View style={styles.container}>
        <ImageBackground
          source={require('./source/assuts/images/beautiful.webp')}
          resizeMode="cover"
          style={styles.images}>
          <Text style={styles.textt}>
            Muhammad Waqar
            </Text>
            
        </ImageBackground>
      </View>

      <View style={styles.Icon}>
        <View>
          <Image
            source={require('./source/assuts/images/beautiful-rain.jpg')}
            style={styles.imageIcon}></Image>
        </View>
        <View style={{paddingLeft: 10}}>
          <Text>Muhammad Waqar</Text>
          <Text>Hello</Text>
        </View>
      </View>
      <View style={{marginBottom: 10}}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={(e) => setText(e.target.value)}
          placeholder="Enter Your Name"></TextInput>
        <TextInput
          style={styles.input}
          value={number}
          onChangeText={(e) => setNumber(e.target.value)}
          placeholder="Enter Your Number"
        />
      </View>

      <View style={styles.cardData}>
        <View style={styles.card}>
          <Image
            source={require('./source/assuts/images/beautiful-rain.jpg')}
            style={styles.image}></Image>
          <View>
            <Text style={styles.cardText}>Beautifull Tree</Text>
          </View>
        </View>
        <View style={styles.card}>
          <Image
            // resizeMode='contain'
            source={require('./source/assuts/images/beautiful-rain.jpg')}
            style={styles.image} />
          <Text style={styles.cardText}>Beautifull Tree</Text>
        </View>
      </View>
    </View>
  );
};

export default App;
