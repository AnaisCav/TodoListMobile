//lib/storage.js

import Storage from "react-native-storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

const storage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage, // pour le web le window.localStorage sera utilisé, sinon le storage par défaut pour le mobile par exemple
  defaultExpires: null, //permet de ne pas avoir de données expirables
  enableCache: true,
  sync: {
    todoslist: () => [], //méthode permettant de retourner todoslist vide s'il n'y en a pas au départ!
  },
});

export default storage;
