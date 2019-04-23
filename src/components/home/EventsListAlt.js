import React, { Component } from "react";
import {
  TouchableOpacity,
  FlatList,
  View,
  Text,
  StyleSheet
} from "react-native";

class EventsListAlt extends Component {
  constructor(props) {
    super(props);
  }
  
  _keyExtractor = (item, index) => item.id;

  _renderItem = ({ item }) => (
      <View>
        <View style={styles.time}>
            <Text style={styles.statTime}>{item.startTime} - {item.endTime}</Text>
        </View>
        <TouchableOpacity
        id={item.id}
        style={[styles.eventCard, styles[item.type]]}
        onPress={() => this.props.onPress(item)}
        >
        <View style={styles.eventDetails}>
            <Text style={styles.title}>{item.name}</Text>
            <View style={styles.otherInfo}>
            <Text style={styles.speaker}>{item.speaker}</Text>
            <Text style={styles.track}>{item.track}</Text>
            </View>
        </View>
        </TouchableOpacity>
      </View>
  );

  render() {
    return (
      <View>
        <FlatList
          data={this.props.events}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  eventCard: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    margin: 6,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    shadowColor: "gray",
    justifyContent: "space-between",
    flex: 1
  },
  time: {
    marginTop: 12,
    marginBottom: 12,
    paddingLeft: 12,
    paddingRight: 12,
    borderRightWidth: 1,
    borderRightColor: "#ddd",
    textAlign:"center"
  },
  statTime: {
    marginBottom: 4,
    textAlign:"center"

  },
  eventDetails: {
    flex: 1,
    marginTop: 12,
    marginBottom: 12,
    paddingLeft: 12,
    paddingRight: 12
  },
  otherInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  title: {
    fontWeight: "600",
    fontSize: 16
  },
  speaker: {
    color: "gray",
    fontSize: 14
  },
  track: {
    color: "gray",
    fontSize: 14
  },
  break: {
    backgroundColor: "#f2f2f2"
  }
});

export default EventsListAlt;
