import type { ExperienceCardData } from '@/components/ExperienceCard'
import type { GeneralInfoCardData } from '@/components/GeneralInfoCard'
import type { KeySkillsCardData } from '@/components/KeySkillsCard'
import type { LanguagesCardData } from '@/components/LanguagesCard'
import type { SkillsSummaryCardData } from '@/components/SkillsSummaryCard'

export interface DataModel {
  keySkills: KeySkillsCardData
  generalInfo: GeneralInfoCardData
  languages: LanguagesCardData
  skillsSummary: SkillsSummaryCardData
  experience: ExperienceCardData
  head: {
    title: string
    description: string
  }
}
