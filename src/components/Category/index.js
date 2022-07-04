import React from 'react'
import { Anchor, Image, ContainerCategorySkeleton, CategoryImage, CategoryTitle } from './styles'

const DEFAULT_IMG = 'https://imgur.com/dJa0Hpl.jpg'

export const Category = ({ cover = DEFAULT_IMG, path, emoji = '?' }) => (
  <Anchor href={path}>
    <Image src={cover} alt='cover' />
    {emoji}
  </Anchor>
)

export const CategorySkeleton = props => {
  return (
    <ContainerCategorySkeleton>
      <CategoryImage light={props.light} />
      <CategoryTitle light={props.light} />
    </ContainerCategorySkeleton>
  )
}
