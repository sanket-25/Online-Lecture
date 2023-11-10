"use client"
import React, { useState } from 'react'
import './globals.css'

export default function Faculty() {
    const [title, setTitle] = useState("")
    const [level, setLevel] = useState("")
    const [desc, setDesc] = useState("")
    const [mainCourse, setMainCourse] = useState([])

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(title)
        console.log(level)
        console.log(desc)
        setMainCourse([...mainCourse, { title, level, desc }])
        console.log(mainCourse)
        setTitle("")
        setLevel("")
        setDesc("")
    }

    const deleteHandler = (i) => {
        let copyCourse = [...mainCourse]
        copyCourse.splice(i, 2)
        setMainCourse(copyCourse)

    }

    let renderCourse = <h2>No Course Available</h2>

    if (mainCourse.length > 0) {
        renderCourse = mainCourse.map((t, i) => {
            return (
                <div className='course-list'>
                    <li key={i} className='li-li'>
                        <div>
                            <h5>{t.title}</h5>
                            <h6>{t.level}</h6>
                            <h6>{t.desc}</h6>
                        </div>

                        <div className='circleAvatarF'>
                            <img src='cat.jpg' />
                        </div>

                        <button
                            onClick={() => { deleteHandler(i) }}
                            className=''>Delete</button>
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
                            setDesc(e.target.value)
                        }}
                    />
                    <input type='text'
                        placeholder='Enter Course Level'
                        className=''
                        value={desc}
                        onChange={(e) => {
                            setDesc(e.target.value)
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