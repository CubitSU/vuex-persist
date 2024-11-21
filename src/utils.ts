import {merge as lodashMerge} from 'lodash'
export type MergeOptionType = 'replaceArrays' | 'concatArrays'

export function merge(into: any, from: any) {
  return lodashMerge({}, into, from)
}
