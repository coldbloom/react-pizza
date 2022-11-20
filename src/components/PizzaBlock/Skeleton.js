import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        className='pizza-block'
        speed={2}
        width={280}
        height={465}
        viewBox="0 0 280 465"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="0" y="293" rx="15" ry="15" width="280" height="87" />
        <rect x="0" y="408" rx="15" ry="15" width="90" height="27" />
        <circle cx="135" cy="116" r="108" />
        <rect x="0" y="247" rx="0" ry="0" width="280" height="28" />
        <rect x="118" y="395" rx="20" ry="20" width="152" height="44" />
    </ContentLoader>
)

export default Skeleton
