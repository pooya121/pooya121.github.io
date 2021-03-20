import { ReactNode, memo } from "react";
import type { FC } from "react";
import Card from "../Card";
import styles from "./styles.module.scss";

export interface SkillsSummaryCardData {
  title: string;
  points: ReactNode[];
}

interface SkillsSummaryCardProps {
  data: SkillsSummaryCardData;
  children?: never;
}

const SkillsSummaryCard: FC<SkillsSummaryCardProps> = ({ data }) => (
  <Card title={data.title} className={styles.root}>
    <ul className={styles.list}>
      {data.points.map((point, i) => (
        <li key={i}>{point}</li>
      ))}
    </ul>
  </Card>
);

export default memo(SkillsSummaryCard);
