export default function Comment ({ comments }) {
    return comments.map((comment) => (
        <h1 onClick = {logId} key = {comment.id} id = {comment.id}>
            {comment.body}
        </h1>
    ))
}

const logId = (event) => {

    console.log(event.target.id)
}