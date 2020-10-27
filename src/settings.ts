interface ISettings {
  title: string // Overrides the default title
  showTagsView: boolean // Controls tagsview display
  fixedHeader: boolean // If true, will fix the header component
}

// You can customize below settings :)
const settings: ISettings = {
  title: 'Vue Typescript Admin',
  showTagsView: true,
  fixedHeader: false
}

export default settings
