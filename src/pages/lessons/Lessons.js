import React, { Component } from 'react'
import {lessonsCollection} from '../../services/FireBaseStore'
import {Lesson} from "./Lesson";



class Lessons extends Component {

    constructor(props){
        super(props);
        this.state = {
            lessonsLoading : true,
            course_id : this.props.match.params.course_id
        };

    }

    componentDidMount() {
        this.fetchLessons().catch(error=>{console.log(error)});

    }

    //fetch courses
    fetchLessons = async (pram) => {


        const course_id = this.state.course_id;
        const Snapshot = await lessonsCollection.where('course_id','==',course_id).get();
        const lessons = Snapshot.docs.map(doc => {
            let data = doc.data();
            data.id =  doc.id;
            return data;
        });

        this.setState({lessons, lessonsLoading : false }, ()=>{
            console.log(this.state);
        });

    };

    render() {

        return (
            <>
                {

                    this.state.lessonsLoading === false &&
                    this.state.lessons.map((lesson) => (
                        <Lesson lesson={lesson} course_id={this.props.match.params.course_id} key={lesson.id}/>
                    ))
                }

            </>
        )
    }
}
export default Lessons;
