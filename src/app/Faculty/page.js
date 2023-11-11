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
        console.log(desc)
        setMainCourse([...mainCourse, { title, desc }])
        console.log(mainCourse)
        setTitle("")
        setDesc("")
    }

    const deleteHandler = (i) => {
        let copyCourse = [...mainCourse]
        copyCourse.splice(i, 1)
        setMainCourse(copyCourse)

    }

    let renderCourse =
        <div className='no-render'><h2>No Faculty Available</h2></div>

    if (mainCourse.length > 0) {
        renderCourse = mainCourse.map((t, i) => {
            return (
                <div className='faculty-list'>
                    <li key={i} className='li-li'>
                        <div>
                            <h5>{t.title}</h5>
                            <h6>{t.desc}</h6>
                            <button
                                onClick={() => { deleteHandler(i) }}
                                className=''>Remove Faculty
                            </button>
                        </div>

                        <div className='circleAvatarF'>
                            <img src='profile.png' />
                        </div>
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
                        placeholder='Enter Faculty Name'
                        className=''
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value)
                        }}
                    />
                    <input type='text'
                        placeholder='Enter Description'
                        className=''
                        value={desc}
                        onChange={(e) => {
                            setDesc(e.target.value)
                        }}
                    />
                    <button
                        className=''>
                        Add Faculty
                    </button>
                </form>
            </section>

            <hr />

        </>
    )
}