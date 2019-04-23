import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { getEvents } from "../services/EventService";
import EventsList from "../components/home/EventsList";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allEvents: [],
      eventsList: [],
      selectedDay: "05-05-2019"
    };
  }
  componentDidMount() {
    let list = getEvents();
    this.setState(
      {
        allEvents: list
      },
      () => this.filterData("05-05-2019")
    );
  }

  showEventDetails = event => {
    if (event.type !== "break") {
      this.props.navigation.navigate("EventDetails", { data: event });
    }
  };

  filterData = selectedDay => {
    const eventsList = this.state.allEvents[selectedDay];
    console.log("Events list...", eventsList);
    this.setState({
      eventsList,
      selectedDay,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.datesContainer}>
          <TouchableOpacity
            onPress={() => this.filterData("05-05-2019")}
            style={styles.eventDate}
          >
            <Text
              style={
                this.state.selectedDay === "05-05-2019"
                  ? styles.selectedDate
                  : ""
              }
            >
              05 May {"\n"} 2019
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.filterData("06-05-2019")}
            style={styles.eventDate}
          >
            <Text
              style={
                this.state.selectedDay === "06-05-2019"
                  ? styles.selectedDate
                  : ""
              }
            >
              {" "}
              06 May {"\n"} 2019
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.filterData("07-05-2019")}
            style={styles.eventDate}
          >
            <Text
              style={
                this.state.selectedDay === "07-05-2019"
                  ? styles.selectedDate
                  : ""
              }
            >
              {" "}
              07 May {"\n"} 2019
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <EventsList
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
  },
  selectedDate: {
    fontWeight: "bold",
    color: "red"
  }
});

export default HomeScreen;
