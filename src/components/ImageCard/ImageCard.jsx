import styles from "./ImageCard.module.css";

const ImageCard = ({ image, openModal }) => {
  return (
    <div className={styles.imgContainer}>
      <img
        className={styles.img}
        onClick={() => openModal(image)}
        src={image.urls.small}
        alt={image.description}
      />
    </div>
  );
};

export default ImageCard;
