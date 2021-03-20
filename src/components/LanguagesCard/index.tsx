import { Fragment, memo } from "react";
import type { FC } from "react";
import Card from "../Card";
import styles from "./styles.module.scss";

export interface LanguagesCardData {
  title: string;
  languages: { name: string; status: string }[];
}

interface LanguagesCardProps {
  data: LanguagesCardData;
  children?: never;
}

const LanguagesCard: FC<LanguagesCardProps> = ({ data }) => (
  <Card title={data.title} className={styles.root}>
    <dl className={styles.descriptionList}>
      {data.languages.map(({ name, status }) => (
        <Fragment key={name}>
          <dt>{name}</dt>
          <dd>{status}</dd>
        </Fragment>
      ))}
    </dl>
  </Card>
);

export default memo(LanguagesCard);
