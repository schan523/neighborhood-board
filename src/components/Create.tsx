import './Create.css'

export default function Create() {
    return (
        <div id = 'createFeed'>
            <div className= 'social-media-wrapper'>
                <div className = 'social-media-header'>
                    <a href ='#' ><img className = 'imgProfile' src = 'https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2281862025.jpg' alt =''/> <span><p class ='username'>Username</p></span></a>
                {/* should be a user name here. when you click on the profile image it links you the creator's post history */}
                </div>
                <div id = 'social-media-create'>
                {/* should be a user name here in the input line */}
                    <form>
                        <p><input type="text" placeholder = "Title "></input> </p>
                        <p><input  type="text" placeholder = "Where's this issue at?"></input> </p>
                        <p><textarea placeholder = "Enter your comments here" name = "comments"></textarea></p>
                        <button type="submit">Post</button>
                    </form>
                </div>
                <div className = 'social-media-footer'>
                </div>
            </div>
        </div>
        
    );
}
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Create />);