import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import StyledButton from '../StyledButton'
import styles from "./style"
const Caritem = (props) => {
    const {name, tagline, image, taglineCTA} = props.car
  return (
    <View style={styles.Carcontainer}>
        <ImageBackground
          source={image}
          style={styles.image}
        />
        <View style={styles.maintitle}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>{tagline}{" "}<Text style={styles.subtitleCTA}>{taglineCTA}</Text></Text>
         
        </View>
        <View style={styles.buttonsContainer}>
        <StyledButton type="primary" content={"Custom Order"} onPress={()=>{console.warn("Custom Order is pressed")}}/>
        <StyledButton type="secondary" content={"Existing Invantory"} onPress={()=>{console.warn("Existing Invantory is pressed")}}/>

        </View>
        
      </View>
  )
}

export default Caritem