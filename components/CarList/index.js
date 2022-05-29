import { View, Text, FlatList } from "react-native";
import React from "react";
import cars from "./cars";
import styles from "./style";
import Caritem from "../Caritem";
import { Dimensions } from "react-native-web";

const CarList = (props) => {
  return (
    <View style={styles.container}>
      {/* <Caritem
        name={"Model 3"}
        taglineCTA={"Touchless Delivery"}
        tagline={"Order Online for"}
        image={require("./assets/images/Model3.jpeg")}
      /> */}
      <FlatList
        data={cars}
        renderItem={({ item }) =>
          <Caritem
            car={item}

          />
        }
        showsVerticalScrollIndicator={false}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
};

export default CarList;
