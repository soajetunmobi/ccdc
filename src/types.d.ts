type SubjectsType = Record<'subject', string>

interface AttributeObject {
  doi: string
  identifiers?: Array<any>
  creators: Array<CreatorObject>
  titles: Array<Record<'title', string>>
  publisher: string
  container?: Record<string, any>
  publicationYear: number
  subjects: Array<SubjectsType>
  contributors?: Array<any>
  dates?: Array<any>
  language: string
  types: Record<string, string>
  relatedIdentifiers: Array<any>
  sizes: Array<any>
  formats: Array<string>
  version?: string
  rightsList?: Array<any>
  descriptions: Array<Record<string, string>>
  geoLocations: Array<any>
  fundingReferences: Array<any>
  url: string
  contentUrl?: string
  metadataVersion: number
  schemaVersion: string
  source: string
  isActive: boolean
  state: string
  reason?: string
  viewCount: number
  downloadCount: number
  referenceCount: number
  citationCount: number
  partCount: number
  partOfCount: number
  versionCount: number
  versionOfCount: number
  created: string
  registered: string
  published?: string
  updated: string
}

interface CreatorObject {
  name: string
  affiliation: Array<any>
  nameIdentifiers: Array<any>
}

interface DataObject {
  id: string
  type: string
  attributes: AttributeObject
  relationships: Record<string, any>
}

interface DataCiteResponse {
  data: Array<DataObject>
  meta: Record<string, MetaDataType>
  links: Record<string, string>
}

interface RecordDetailObject {
  id: string
  title: string
  subjects: Array<Record<'subject', string>>
  url: string
  publicationYear: number
  publisher: string
}

type MetaDataType = number | Array<Record<string, MetaStateValueType>>

type MetaStateValueType = string | number

type IUnionFetchDataType = DataCiteResponse | undefined
