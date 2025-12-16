const Poster = ({ postArray }) => {
    return (
        <div className="flex flex-col gap-4 p-4">
            {postArray.map((post, index) => (
                <div className="flex flex-col gap-2 border-2 my-4 p-4" key={index}>
                    <h3 className="text-lg font-bold text-red-600 mx-2">{post.title}</h3>
                    <p className="text-xl text-gray-500 font-bold mx-2">{post.subscribtion}</p>
                    <img src={post.image} />
                </div>
            ))}
        </div>
    )
}

export default Poster;