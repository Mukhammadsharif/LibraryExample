import Axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Books from './Books'
import AddBook from './AddBook'

const Main = () => {
    const [category, setCategory] = useState()
    const [newBook, setNewBook] = useState()
    const [books, setBooks] = useState()
    const [value, setValue] = useState('')
    const [author, setAuthor] = useState('')
    const [selected, setSelected] = useState('')
    const [delettedBook, setDelettedBook] = useState('')
    const [editted, setEditted] = useState()
    const [updated, setUpdated] = useState(false)
    const [categoryData, setCategoryData] = useState()
    const [categoryId, setCategoryId] = useState()
    const [image, setImage] = useState(null)

    const GetBooks = () => {
        Axios.get('http://127.0.0.1:8000/books-list/')
        .then(res => {
            const books = res.data;
            setBooks(books);
          })
    }
    const GetCategories = () => {
        Axios.get('http://127.0.0.1:8000/categories?format=json')
        .then(res => {
            const categories = res.data;
            setCategory(categories);
          })
    }

    useEffect(() => {
        GetBooks()
        GetCategories()
        setValue('')
        setAuthor('')
        setImage(null)
    }, [newBook, delettedBook, updated])

    useEffect(() => {
        Deletted()
        Editted()
        GetByCategory()
    }, [selected, editted, categoryId])
    

        const Create = () => {
            const data = new FormData()
            data.append('photo', image)
            data.append('title', value)
            data.append('author', author)
            fetch(`http://127.0.0.1:8000/books-list/`,{
                method: 'POST',
                mode: 'cors',
                body: data
            })
            .then((res) => {
                setNewBook(res)
                setValue('')
                setAuthor('')
                console.log('res: ',res)
                return res.json()
            })
        }
         
        const Select = (e) => {
            setSelected(e.target.id)
        }

        const Deletted = () => {
            if (selected){
            Axios.delete(`http://127.0.0.1:8000/books-detail/${selected}/`)
            .then(res => {
                setDelettedBook(res)
                console.log(res);
                console.log(res.data);
                
            })
        }
        }

        const SelectForEdit = (e) => {
            setEditted(e.target.id)
        }
        const Editted = () => {
            if (editted){
            Axios.get(`http://127.0.0.1:8000/books-detail/${editted}/`)
            .then(res => {
                setValue(res.data.title)
                setAuthor(res.data.author)
                console.log(res);
                console.log(res.data)
            })
        }
        }
   
        const Updated = () => {
            if (editted){
            Axios.put(`http://127.0.0.1:8000/books-detail/${editted}/`, {"title": value, "id": editted, "author":author})
            .then(res => {
                setUpdated(!updated)
                setEditted(null)
                console.log(res.data)
            })
        }
        }

    const Add = (event) => {
    if (event) {
        setValue(event.target.value)
        }
    }
    
    const AddAuthor = (event) => {
        if(event) {
            setAuthor(event.target.value)
        }
    }

    const AddImage =(e) => {
        if(e) {
            setImage(e.target.files[0])
            console.log(e.target.files[0])

        }
    }

    const SelectCategory = (id) => {
        setCategoryId(id)
    }
    const GetByCategory = () => {
        if(categoryId){
        Axios.get(`http://127.0.0.1:8000/sort-books/${categoryId}/`)
        .then(res => {
            setCategoryData(res.data);
            console.log(categoryData)
          })
        }
    }
    console.log(image)
    return(
        <div className="mx-2">
             <Navbar category = {category} selectCategory={SelectCategory}/>
             <AddBook add={Add} value={value} create = {Create} author={author}
               AddAuthor={AddAuthor}  updated={Updated} editted={editted} AddImage={AddImage}/>
             <Books books = {books} select={Select} selectForEdit={SelectForEdit}/>
        </div>
    )
}
export default Main