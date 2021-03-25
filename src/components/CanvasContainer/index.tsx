import type { FC } from 'react'
import styles from './styles.module.scss'

const CanvasContainer: FC = ({ children }) => <div className={styles.root}>{children}</div>

export default CanvasContainer
