const AddBook = (props) => {
    return(
        
     <div className="mt-4 is-flex">
            <input type="text" className="input" onInput={e => {props.add(e)}} value={props.value} placeholder="Add name of the book"/>
            <input type="text" className="input" placeholder="Add an author"
            onInput={e => {props.AddAuthor(e)}} value={props.author}/>
            <input type="file" className="input" placeholder="Add image of the current book" ref={props.ref}
             onInput={e => {props.AddImage(e)}}/>
            {props.editted ? 
                <button className="button ml-4 is-warning"  onClick={() => props.updated()}>Update</button>
                : <button className="button ml-4 is-warning"  onClick={() => props.create()}>Submit</button>
            }
     </div>
    )
}
export default AddBook