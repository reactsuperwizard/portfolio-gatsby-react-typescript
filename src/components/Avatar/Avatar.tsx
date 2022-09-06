import React from 'react'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import './Avatar.css'


export type AvatarProps = {
  src: any;
  alt: string;
};

const Avatar = ({ src, alt }: AvatarProps) => {
  return (
    <GatsbyImage image={src} alt={alt} imgStyle={{ borderRadius: "100%" }} />
  )
}

export { Avatar }
