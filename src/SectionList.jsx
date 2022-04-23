import React from "react";
import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import { Appbar, List, Button } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import BigList from "react-native-big-list";


export default function SectionList({
  style, sectionHeaderStyle,
  ...props
}) {
  const componentRef = React.useRef(null);

  const renderEmpty = () => <List.Item title="No items" />;

  const renderSectionHeader = (section) => (
    <Appbar
      style={{
        ...styles.header,
        ...sectionHeaderStyle
      }}>
      <Appbar.Content
        style={styles.headerContent}
        title={props.sectiondata[section][0]["category"]}
      />
    </Appbar>
  );

  return (
    <View style={styles.container}>
      <View style={{ display: "flex", flexDirection: "row" }}>
        {props.sectiondata.map((cat, index) => (
          <Button
            mode="outlined"
            color="black"
            key={index}
            onPress={() =>
              componentRef.current.scrollToSection({ section: index })
            }
          >
            {cat[0]["category"]}
          </Button>
        ))}
      </View>
      <KeyboardAvoidingView style={styles.container}>
        <BigList
          sections={props.sectiondata}
          itemHeight={50}
          renderEmpty={renderEmpty}
          sectionHeaderHeight={0}
          renderSectionHeader={renderSectionHeader}
          ref={(ref) => (componentRef.current = ref)}
          {...props}
          style={{
              ...styles.container,
              ...style
          }}
        />
        <StatusBar style="auto" />
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: { elevation: 0, height: 50 },
  headerContent: { alignItems: "center", height: 50, justifyContent: "center" },
});
