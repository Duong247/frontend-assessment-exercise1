import imgBreak from "../assets/img/400x300.svg"

export default function Post({content,postImg}){
    return(
        <div className="post-item border border-primary-light shadow-sm rounded-sm p-4 m-3 max-w-[600px] flex flex-col" >
            <img className="post-item-img mb-3 rounded-sm" src={postImg?postImg:imgBreak} alt="Card image cap"/>
            <div className="post-body flex flex-col flex-1">
                <p className="post-text my-4 flex-1" dangerouslySetInnerHTML={{ __html: content }}></p>
                <a href="#" className="btn btn-primary read-btn mt-auto">READ MORE</a>
            </div>
        </div>
    )
}

