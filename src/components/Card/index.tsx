import type { FC } from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";

interface CardProps {
  className?: string;
  title?: string;
}

const Card: FC<CardProps> = ({ children, className, title }) => (
  <section className={clsx(styles.root, className)}>
    {title && <h2 className={styles.title}>{title}</h2>}
    {children}
  </section>
);

export default Card;
