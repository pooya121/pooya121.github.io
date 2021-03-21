import type { GeneralInfoCardData } from '@/components/GeneralInfoCard'
import type { KeySkillsCardData } from '@/components/KeySkillsCard'
import type { LanguagesCardData } from '@/components/LanguagesCard'
import type { SkillsSummaryCardData } from '@/components/SkillsSummaryCard'

export interface DataModel {
  keySkillsCardData: KeySkillsCardData
  generalInfoCardData: GeneralInfoCardData
  languagesCardData: LanguagesCardData
  skillsSummaryCardData: SkillsSummaryCardData
}
