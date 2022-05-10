import {
 MovieCard,
 ImgCard,
 TextCard
} from "./styled"
import { convertDate } from "../../functions/convertDate";

export function CardMovieHome(props) {
 return (
  <MovieCard onClick={props.onClick} key={props.movie.id} >
   <ImgCard src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`} />
   <TextCard>
    <p className="movieTitle">{props.movie.title}</p>
    <p className="movieDate">{convertDate(props.movie.release_date, 0)}</p>
   </TextCard>
  </MovieCard>
 )
}