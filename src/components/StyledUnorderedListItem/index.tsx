import type { FC } from 'react'
import styles from './styles.module.scss'
import clsx from 'clsx'

export interface StyledUnorderedListItemProps {
  className?: string
}

const StyledUnorderedListItem: FC<StyledUnorderedListItemProps> = ({ children, className }) => (
  <li className={clsx(styles.root, className)}>{children}</li>
)

export default StyledUnorderedListItem
