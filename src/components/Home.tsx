import './Home.css'

export default function Home() {
    return (
        <div id ='homepage'>
            <div id = 'aside'>
                <h2>Noticings</h2>
                <ul>
                    <li><a href ='#'>most recent visted post</a></li>
                    <li><a href ='#'>second most recent visted post</a></li>
                    <li><a href ='#'>third most recent visted post</a></li>
                </ul>
            </div>
            <div id = 'main'>
                <div id='feed'>
                    <p>cards will go here</p>
                    <div className= 'social-media-post-wrapper'>

                    </div>
                    
                </div>

            </div>
        </div>
        
    );
} 