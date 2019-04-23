import React, { Component } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { getEvents } from "../services/EventService";
import EventsListAlt from "../components/home/EventsListAlt";

class HomeAltScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventsList: []
    };
  }
  componentDidMount() {
    let eventsList = getEvents();
    this.setState({
      eventsList
    });
  }

  showEventDetails = event => {
    if (event.type !== "break") {
      this.props.navigation.navigate("EventDetails", { data: event });
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.datesContainer}>
          <View style={[styles.eventDate, styles.selectedDate]}>
            <Text>05 May</Text>
            <Text>2019</Text>
          </View>
          <View style={styles.eventDate}>
            <Text>06 May</Text>
            <Text>2019</Text>
          </View>
          <View style={styles.eventDate}>
            <Text>07 May</Text>
            <Text>2019</Text>
          </View>
        </View>
        <ScrollView>
          <EventsListAlt
            onPress={this.showEventDetails}
            events={this.state.eventsList}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#f5f5f5",
    flex: 1
  },
  datesContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  eventDate: {
    fontSize: 18,
    margin: 12,
    fontWeight: "500",
    color: "gray",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
});

export default HomeAltScreen;
