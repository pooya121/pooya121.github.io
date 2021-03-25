import type { DetailedHTMLProps, FC, LiHTMLAttributes } from 'react'
import clsx from 'clsx'
import styles from './styles.module.scss'

const ResetLI: FC<DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>> = ({ className, ...other }) => (
  <li {...other} className={clsx(styles.root, className)} />
)

export default ResetLI
