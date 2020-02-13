import { SkillItemInner, SkillTitle, StyledArrowIcon, SkillStatus } from './styles'

interface Props {
  children?: never
  title: string
  status: string
}

const SkllItem: React.FC<Props> = ({ status, title }) => {
  return (
    <SkillItemInner>
      <StyledArrowIcon />
      <SkillTitle>{title}</SkillTitle>
      <SkillStatus>{status}</SkillStatus>
    </SkillItemInner>
  )
}

export default SkllItem
