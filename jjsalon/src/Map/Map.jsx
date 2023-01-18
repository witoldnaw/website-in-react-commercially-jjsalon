import styles from "./Map.module.css";
import map from "./map.png";

export function Map() {
  return (
    <img
      className={styles.imageMapWrapper}
      src={map}
      alt="mapa dojazdowa do salonu"
    ></img>
  );
}
