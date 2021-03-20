import clsx from "clsx";
import type { FC } from "react";
import styles from "./styles.module.scss";

interface ContainerProps {
  className?: string;
}

const Container: FC<ContainerProps> = ({ children, className }) => (
  <main className={clsx(styles.root, className)}>{children}</main>
);

export default Container;
