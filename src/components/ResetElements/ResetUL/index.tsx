import type { DetailedHTMLProps, FC, LiHTMLAttributes } from 'react'
import clsx from 'clsx'
import styles from './styles.module.scss'

const ResetUL: FC<DetailedHTMLProps<LiHTMLAttributes<HTMLUListElement>, HTMLUListElement>> = ({
  className,
  ...other
}) => <ul {...other} className={clsx(styles.root, className)} />

export default ResetUL
