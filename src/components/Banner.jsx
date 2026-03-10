export default function Banner(){
    return(
        <div className="banner ">
            <div className="banner-over-lay w-full h-full"></div>
            <div className="banner-content absolute w-full h-full flex flex-col items-center justify-center ">
                <h1 className="banner-content-title">Hello Developer!</h1>
                <h2 className="banner-content-description font-normal tracking-wide"> Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2>
            </div>
        </div>
    );
}