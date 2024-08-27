//components/TodosList.js
import { ScrollView, StyleSheet } from "react-native";
import { Icon, ListItem, Text } from "@rneui/themed";

const TodosList = ({ list, changeCheck }) => {
  return (
    <ScrollView style={styles.todoslist}>
      {list.length ? (
        list.map((l, i) => (
          <ListItem
            bottomDivider
            key={i}
            containerStyle={{
              backgroundColor: l.status === "done" ? "#d1d1d1" : "white",
            }}
          >
            <ListItem.CheckBox
              iconType="ionicon"
              checkedIcon="checkbox-outline"
              uncheckedIcon="square-outline"
              checked={l.status === "done"}
              onPress={() => {
                changeCheck(i);
              }}
            />
            <ListItem.Content>
              <ListItem.Title
                style={{
                  color: l.status === "done" ? "gray" : "black",
                }}
              >
                {l.value}
              </ListItem.Title>
            </ListItem.Content>
            <ListItem.Content right style={{ flexDirection: "row", gap: 20 }}>
              <ListItem.Title right>
                <Icon
                  type="ionicon"
                  name="pencil"
                  color={"gray"}
                  disabled={l.status === "done"}
                />
              </ListItem.Title>
              <ListItem.Title right>
                <Icon
                  type="ionicon"
                  name="trash"
                  color={"red"}
                  disabled={l.status === "done"}
                />
              </ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))
      ) : (
        <Text>Vous n'avez pas de todos, créez en une dès maintenant!</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  todoslist: {
    marginTop: 30,
  },
});

export default TodosList;
