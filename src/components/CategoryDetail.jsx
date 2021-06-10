
const CategoryDetail = (props) => {
    console.log(props.categoryData)
    return(
        <div>
            <article className="message is-primary">
                    <div>
                        <div className="message-header">
                            {props.categoryData && props.categoryData.map(data => 
                                 <p>{data.title}</p>)}
                             <button className="delete" aria-label="delete"></button>
                        </div>
                        <div className="message-body">
                            {}
                        </div>
                    </div>
            </article>
        </div>
    )
}
export default CategoryDetail
