import React from 'react'
import  Stories from '../../components/stories/stories'
import Addpost from '../../components/addPost/Addpost'
import Feeds from '../../components/feeds/Feeds'

export default function home() {
  return (
    <>
    <Stories/>
    <Addpost/>
    <Feeds/>
    </>
  )
}
