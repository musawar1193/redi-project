import React, { Component } from 'react'
import {coursesCollection} from '../../services/FireBaseStore'
import {Course} from "./Course";
import styled from "styled-components";
import {StyledDiv, StyledHeader, CoursesLogo, StyledButton} from './CoursesStyle';

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
                <StyledDiv>
                    <StyledHeader>Your Courses</StyledHeader>
                {

                this.state.coursesLoading === false &&
                    this.state.courses.map((course) => (
                    <Course course={course} key={course.id}/>
                    ))
                }
                </StyledDiv>
            </>
        )
    }
}
 export default Courses;
