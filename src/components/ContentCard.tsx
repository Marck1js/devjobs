import React from 'react'
import styles from '@styles/ContentCard.module.scss'
import Card from './Card'
import { Root, Root2 } from '@/types'


const ContentCard = ({data}: {data: Root}) => {
  return (
    <div className={styles.main}>
        
      {
        data.length >= 1 && data.map(e => {
          return (
            <Card logo={e.logo} color={e.logoBackground} time={e.postedAt} company={e.company} country={e.location} kind={e.contract} position={e.position}/>
          )
        })
      }


    </div>
  )
}

export default ContentCard