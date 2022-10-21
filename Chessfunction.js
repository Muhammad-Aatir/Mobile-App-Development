import { View, StyleSheet } from "react-native";


export default function Chessfunction(props) {
  const blocks = [];
  for (let rows = 1; rows <= 8; rows++) {
    for (let columns = 1; columns<= 8; columns++) {
      blocks.push(
        <View
          style={
            rows % 2 == 0
              ? columns % 2 == 0
                ? styles.Box2
                : styles.Box1
              : columns % 2 != 0
              ? styles.Box2
              : styles.Box1
          }
        ></View>
      );
    }
  }
  return <View style={styles.board}>{blocks}</View>;
}
const styles = StyleSheet.create({
    board: {
        width: 420,
        height: 420,
        borderColor: "brown",
        flexDirection: "row",
        flexWrap: "wrap",
  },
  Box1: {
    width: 50,
    height: 50,
    backgroundColor: "dodgerblue",
  },
  Box2: {
    width: 50,
    height: 50,
    backgroundColor: "black",
  },
});
