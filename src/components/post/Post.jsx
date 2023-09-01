import "./Post.css";
import { Link } from "react-router-dom"
export default function Post() {
  return (
    <div className="post">
        <Link to="/post">
        <img className="postImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7KXf_NJ4QDslAfdiCyBR5r_UE9MvmUULZfQ&usqp=CAU"
        alt="no img"
        />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">Lorem ipsum dolor sit amet.</span>
            <hr/>
            <span className="postDate">1 hr ago</span>
        </div>
        <p className="postDesc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, incidunt, voluptas nihil adipisci obcaecati aspernatur sunt tempore facilis inventore tempora voluptatem perferendis ex architecto, reprehenderit natus quis beatae odit. Nostrum totam repudiandae vero, dolores corporis tempora quis, cum blanditiis qui, possimus sequi officiis? Aperiam eos dignissimos est, repellat eligendi fugiat?

        </p>
        </Link>
    </div>
  )
}
