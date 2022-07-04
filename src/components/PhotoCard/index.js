import React from 'react'
import { ImgWrapper, Img, Article } from './STYLES.JS'
import { useLocalStoreage } from '../../hooks/useLocalStoreage'
import { useNearScreen } from '../../hooks/useNearScreen'

import { TextBlock, RectShape, RoundShape } from 'react-placeholder/lib/placeholders'
import { FavButton } from '../FavButton'
import { useMuationToogleLike } from '../../hooks/useMuationToogleLike'

const DEFAULT_IMG = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMG }) => {
  const key = `liked-${id}`
  const [liked, setLiked] = useLocalStoreage(key, false)
  const [show, ele] = useNearScreen()
  const { mutation } = useMuationToogleLike()

  const handleFavClick = () => {
    !liked && mutation({
      variables: {
        input: { id }
      }
    })
    setLiked(!liked)
  }

  return (
    <Article ref={ele}>
      {
        show &&
          <>
            <a href={`?detail=${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </a>
            <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
          </>
      }
    </Article>
  )
}

export const PhotoCardSkeleton = () => (
  <>
    <RectShape color='#eee' style={{ height: '219px', marginBottom: 10 }} />
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <RoundShape
        color='#eee'
        style={{ width: 32, height: 32, marginLeft: 10, marginRight: 10 }}
      />
      <TextBlock color='#eee' rows={1} style={{ width: 50 }} />
    </div>
  </>
)
