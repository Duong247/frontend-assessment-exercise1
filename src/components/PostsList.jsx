import Post from '../components/Post'

export default function PostList(){
    const DATA = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    return(
        <div className="post-section container mx-auto max-w-5xl">
            <div className="post-list grid gap-4 justify-center grid-cols-1 lg:grid-cols-3 mb-3 m-3 my-4 "> 
                <Post content={DATA} postImg={''}/>
                <Post content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} postImg={''}/>
                <Post content={DATA} postImg={''}/>
            </div>
        </div>
    )
}