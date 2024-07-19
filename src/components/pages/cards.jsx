import { images } from "../utils/imagescard";
import Exercise from "../exercise/exercise";

function Card() {
    return (
        <div> 
            {images.map((image) => {
                return (
                    <Exercise image={image} url={ image.url} />
                )
            })}
    </div>
)

}

export default Card