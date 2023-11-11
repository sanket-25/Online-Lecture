"use client"
import React, { useState } from 'react'
import './globals.css'

export default function Courses() {
    const [title, setTitle] = useState("")
    const [level, setLevel] = useState("")
    const [desc, setDesc] = useState("")
    const [img, setImg] = useState("")
    const [mainCourse, setMainCourse] = useState([])

    const addProduct = async () => {
        console.log(name,price,color);
        let result = await fetch("http://localhost:3000/Courses",{
            method: "POST",
            body:JSON.stringify({name,price,color})
        });
        result = await result.json();
        if(result.success){
            alert("new course added")
        }
    }

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(title)
        console.log(level)
        console.log(desc)
        console.log(img)
        setMainCourse([...mainCourse, { title, level, desc, img }])
        console.log(mainCourse)
        setTitle("")
        setLevel("")
        setDesc("")
        setImg("")
    }

    const deleteHandler = (i) => {
        let copyCourse = [...mainCourse]
        copyCourse.splice(i, 3)
        setMainCourse(copyCourse)

    }
    let renderCourse =
        <div className='no-render'><h2>No Course Available</h2></div>
    if (mainCourse.length > 0) {
        renderCourse = mainCourse.map((t, i) => {
            return (
                <div className='course-list'>
                    <li key={i} className='li-li-c'>
                        <h5>{t.title}</h5>
                        <h6>{t.level}</h6>
                        <h6>{t.desc}</h6>
                        <button
                            onClick={() => { deleteHandler(i) }}
                            className=''>Delete
                        </button>
                        <img src={t.img} />
                        <br />
                    </li>
                </div>
            );
        })
    }
    return (
        <>
            <section className='center-data'>
                <div className=''>
                    <ul>
                        {renderCourse}
                    </ul>
                </div>
            </section>
            <section className='right-form'>
                <form onSubmit={submitHandler}>
                    <input type='text'
                        placeholder='Enter Course Name'
                        className=''
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value)
                        }}
                    />
                    <input type='text'
                        placeholder='Enter Course Level'
                        className=''
                        value={level}
                        onChange={(e) => {
                            setLevel(e.target.value)
                        }}
                    />
                    <input type='text'
                        placeholder='Enter Course Description'
                        className=''
                        value={desc}
                        onChange={(e) => {
                            setDesc(e.target.value)
                        }}
                    />
                    <input type='file'
                        placeholder='Image'
                        className=''
                        value={img}
                        onChange={(e) => {
                            setImg(e.target.value)
                        }}
                    />
                    <button
                        className=''>
                        Add Course
                    </button>
                </form>
            </section>

            <hr />

        </>
    )
}