import { StoreState } from 'state/ducks'

export const getCount = ({ counter }: StoreState) => counter.count
