import {StyleSheet, css} from 'aphrodite'
const Books = (props) => {
    const styles = StyleSheet.create({
        color: {
            color: '#33bbff'
        }
    })
    return (
        <div className='mt-4'>
            <div className="panel is-link">
                <p className="panel-heading">
                    Books
                </p>
                <div style={{display: 'flex', flexWrap: "wrap"}}>
                    {props.books && props.books.map((book) =>(
                <div style={{}} className="column is-4">
                    <div className="card mt-2 has-text-centered"  key={book.id} style={{width:"500px", borderRadius: "20px"}}>
                        <div className="card-content mr-6">
                            <div className="media">
                            <div className="media-left">
                                <figure className="image is-48x48">
                                </figure>
                            </div>
                            <div className="media-content">
                                <p className="title is-4">{book.title}</p>
                                <img src={ `http://127.0.0.1:8000${book.photo}` } alt="Фото" className="mr-6"/>
                            </div>
                            </div>

                            <div className="content ml-6">
                            {book.author}
                            <a href="/" className={css(styles.color)}>#css</a> <a className={css(styles.color)} href="/">#responsive</a>
                            <br/>
                            <time dateTime="2016-1-1">{book.date}</time>
                            </div>
                            <button className="button is-primary ml-5 is-rounded is-small is-fullwidth" 
                            id={book.id}  onClick={(e) => props.selectForEdit(e)}>Edit</button>
                            <button className="button is-warning ml-5 is-rounded is-small is-fullwidth mt-2" 
                            id={book.id}  onClick={(e) => props.select(e)}>Delete</button>
                        </div>
                        </div>
                        </div>
                        )
                        )}
                </div>
            </div>
        </div>
    )
}
export default Books