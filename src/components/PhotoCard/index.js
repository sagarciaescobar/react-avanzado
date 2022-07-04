import React from 'react'
import { ImgWrapper, Img, Button, Article } from './STYLES.JS'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useLocalStoreage } from '../../hooks/useLocalStoreage'
import { useNearScreen } from '../../hooks/useNearScreen'

const DEFAULT_IMG = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMG }) => {
  const key = `liked-${id}`
  const [liked, setLiked] = useLocalStoreage(key, false)
  const [show, ele] = useNearScreen()
  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Article ref={ele}>
      {
        show &&
          <>
            <a href={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </a>
            <Button onClick={() => { setLiked(!liked) }}>
              <Icon size='32' />{likes} likes!!
            </Button>
          </>
      }
    </Article>
  )
}
