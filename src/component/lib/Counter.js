/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'

export default function Counter({render}) {

    const [division, setDivision] = useState([]);
    const [district, setDistrict] = useState([]);


    useEffect(() => {
        const uri = 'http://localhost:8000/division';
        fetch(uri)
        .then(res => res.json())
        .then(data => setDivision(data.divisions))
        //    clean up

        return () => {
            setDivision([])
        }
    }, [])

    //  get all dictrict

    useEffect(() => {
        const uri = 'http://localhost:8000/district';
        fetch(uri)
        .then(res => res.json())
        .then(data => setDistrict(data.districts))

        // cleanup
        return () => {
            setDistrict([])
        }
    }, [])

    return render(division, district)

}