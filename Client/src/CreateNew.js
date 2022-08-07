import './Card.css'

const CreateNew = () => {

    function handleSubmit(e) {
        e.preventDefault()
        var title = document.getElementById("title").value;
        var imgSrc = document.getElementById("imgSrc").value;
        var desc = document.getElementById("desc").value;

        const data = {title, imgSrc, desc };
        console.log(data)
    }

    return (
        <div className="addbar">
            <form onSubmit={handleSubmit}>
                <label className="addtitle">Add New:</label>

                <label>Name</label><input type="text" id="title" />
                <label>Image Url</label><input type="text" id="imgSrc"/>
                <label>Description</label><input className="descbox" type="text" id="desc"/>

                <button onClick={handleSubmit} className="btn btn-info" type="submit" >Submit</button>
            </form>
        </div>
    );
};

export default CreateNew