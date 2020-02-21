export interface LocaleState {
  lang: string
  dir: string
  darkThemeLabel: string
  lightThemeLabel: string
  page: Page
  header: Header
  personalInfo: PersonalInfo
  skills: Skills
  experience: Experience
  profiles: Profiles
}

interface Experience {
  title: string
  galleryButtonLabel: string
  items: ExperienceItem[]
}

interface ExperienceItem {
  name: string
  url: string
  role: string
  startDate: string
  endDate: string
  images: Image[]
}

interface Image {
  src: string
}

interface Header {
  title: string
  subTitle: string
  viewOnGithub: ViewOnGithub
}

interface ViewOnGithub {
  title: string
  url: string
}

interface Page {
  title: string
  description: string
}

interface PersonalInfo {
  title: string
  imageUrl: string
  birthdate: ValueLabel
  education: ValueLabel
  militaryService: ValueLabel
  location: ValueLabel
  email: ValueLabel
  phoneNumber: ValueLabel & { formatedValue: string }
}

interface ValueLabel {
  label: string
  value: string
}

interface Profiles {
  title: string
  website: ProfilesItem
  items: ProfilesItem[]
}

interface ProfilesItem {
  id: string
  name: string
  url: string
}

interface Skills {
  title: string
  items: SkillsItem[]
}

interface SkillsItem {
  title: string
  status: string
}
