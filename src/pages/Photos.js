import React from "react"
import Image from "../components/Image"
import {getClass} from "../utils/classUtil"
import { Context } from "../Context"

function Photos() {
	const { allPhotos } = React.useContext(Context)
	const photosElements = allPhotos.map((elem, index) => 
	(
		<Image key={elem.id} img={elem} className={getClass(index)} />
	))
    return (
        <main className="photos">
            {photosElements}
        </main>
    )
}

export default Photos