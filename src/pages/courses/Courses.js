import React, { Component } from 'react'
import {coursesCollection} from '../../services/FireBaseStore'
import {Course} from "./Course";

class Courses extends Component {

    constructor(props){
        super(props);
        this.state = {
            coursesLoading : true
        };

    }

    componentDidMount() {
        this.fetchCourses().catch(error=>{console.log(error)});

    }

    //fetch courses
    fetchCourses = async (pram) => {


        const Snapshot = await coursesCollection.get();
        const courses = Snapshot.docs.map(doc => {
            let data = doc.data();
            data.id =  doc.id;
            return data;
        });

        this.setState({courses, coursesLoading : false }, ()=>{
            console.log(this.state);
        });

    };

    render() {

        return (
            <>
                {

                this.state.coursesLoading === false &&
                    this.state.courses.map((course) => (
                    <Course course={course} />
                    ))
                }

            </>
        )
    }
}
 export default Courses;
