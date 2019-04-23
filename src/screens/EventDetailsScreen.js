import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class EventDetailsScreen extends Component {
  render() {
    const event = this.props.navigation.state.params.data;
    return (
      <View style={styles.container}>
        <Text style={styles.eventName}> {event.name} </Text>
        <View style={styles.flexRow}>
          <View style={styles.info}>
            <Text style={styles.label}>Time</Text>
            <Text style={styles.value}>
              {event.startTime} - {event.endTime}
            </Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.label}>Place</Text>
            <Text style={styles.value}>{event.track}</Text>
          </View>
        </View>
        <View style={styles.info}>
          <Text style={styles.label}>Speaker</Text>
          <Text style={styles.value}>{event.speaker}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.label}>Description</Text>
          <Text style={styles.value}>
            During this meditation, everybody will remain seated, and receive
            the blessing on his place. Many people have remarked on the powerful
            silence during these sessions, and felt that the effect is
            equivalent to Darshan. It will usually last for about 20-35 minutes.
            In India, at this point in time, Mother will only conduct
            Meditations with Mother, as described above.
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    margin: 12,
    flex: 1
  },
  eventName: {
    fontSize: 16,
    marginBottom: 12,
    fontWeight: "bold"
  },
  label: {
    color: "rgba(0,0,0,0.6)",
    marginBottom: 6
  },
  value: {
    color: "rgb(0,0,0)"
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  info: {
    marginBottom: 12,
    marginTop: 12
  }
});

export default EventDetailsScreen;
