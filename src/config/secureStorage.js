import * as SecureStore from "expo-secure-store";

async function saveItem(key, value) {
  await SecureStore.setItemAsync(key, JSON.stringify(value));
}

async function deleteItem(key) {
  await SecureStore.deleteItemAsync(key);
}

async function getValueFor(key) {
  let value = await SecureStore.getItemAsync(key);
  if (value) {
    return JSON.parse(value);
  } else {
    return undefined;
  }
}

export { saveItem, getValueFor, deleteItem };
